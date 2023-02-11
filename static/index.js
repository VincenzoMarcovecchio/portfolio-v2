/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

 async function setupDatGui() {
  const gui = new dat.GUI({width: 300});
  gui.domElement.id = 'gui';

  // The shader folder contains parameters for the shader.
  const shaderFolder = gui.addFolder('Shader');

  showShaderConfigs(shaderFolder);

  shaderFolder.open();

  const modelFolder = gui.addFolder('Model')

  modelFolder.add(STATE, 'DepthCachedFrames', 1, 60).step(1);

  modelFolder.open();

  return gui;
}

async function showShaderConfigs(folderController) {
  // Clean up shader configs for the previous model.
  const fixedSelectionCount = 0;
  while (folderController.__controllers.length > fixedSelectionCount) {
    folderController.remove(
        folderController
            .__controllers[folderController.__controllers.length - 1]);
  }

  for (const uniform of shaderUniforms) {
    folderController.add(STATE, uniform[0], uniform[1], uniform[2]);
  }
}

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// A wrapper class for WebGL texture and its utility functions.
class GlTextureImpl {
  constructor(gl, texture, width, height) {
    this.gl_ = gl;
    this.texture_ = texture;
    this.width = width;
    this.height = height;
  }

  bindTexture() {
    this.gl_.bindTexture(this.gl_.TEXTURE_2D, this.texture_);
  }
}

// A wrapper class for WebGL texture and its associted framebuffer and utility
// functions.
class GlTextureFramebuffer extends GlTextureImpl {
  constructor(gl, framebuffer, texture, width, height) {
    super(gl, texture, width, height);
    this.framebuffer_ = framebuffer;
  }

  bindFramebuffer() {
    this.gl_.bindFramebuffer(this.gl_.FRAMEBUFFER, this.framebuffer_);
    this.gl_.viewport(0, 0, this.width, this.height);
  }
}

// A wrapper class for WebGL program and its utility functions.
class GlProgramImpl {
  constructor(gl, program) {
    this.gl_ = gl;
    this.program_ = program;
    this.cachedUniformLocations_ = new Map();
  }

  useProgram() {
    this.gl_.useProgram(this.program_);
  }

  getUniformLocation(symbol) {
    if (this.cachedUniformLocations_.has(symbol)) {
      return this.cachedUniformLocations_.get(symbol);
    } else {
      const location = this.gl_.getUniformLocation(this.program_, symbol);
      this.cachedUniformLocations_.set(symbol, location);
      return location;
    }
  }
}

// Utility class for drawing.
class FullscreenQuad {
  constructor(gl) {
    this.squareVerticesBuffer_ = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.squareVerticesBuffer_);
    gl.bufferData(
        gl.ARRAY_BUFFER, Float32Array.from([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW);

    this.textureVerticesBuffer_ = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.textureVerticesBuffer_);
    gl.bufferData(
        gl.ARRAY_BUFFER, Float32Array.from([0, 0, 1, 0, 0, 1, 1, 1]),
        gl.STATIC_DRAW);

    this.gl_ = gl;
  }

  // Draws a quad covering the entire bound framebuffer.
  draw() {
    this.gl_.enableVertexAttribArray(0);  // vertex
    this.gl_.bindBuffer(this.gl_.ARRAY_BUFFER, this.squareVerticesBuffer_);
    this.gl_.vertexAttribPointer(0, 2, this.gl_.FLOAT, false, 0, 0);

    this.gl_.enableVertexAttribArray(1);
    this.gl_.bindBuffer(this.gl_.ARRAY_BUFFER, this.textureVerticesBuffer_);
    this.gl_.vertexAttribPointer(1, 2, this.gl_.FLOAT, false, 0, 0);

    this.gl_.drawArrays(this.gl_.TRIANGLE_STRIP, 0, 4);
  }
}

// Utility class for processing a shader.
class GlShaderProcessor {
  constructor(gl, shader) {
    this.quad = new FullscreenQuad(gl);
    this.program = createProgram(gl, PASSTHROUGH_VERTEX_SHADER, shader);
    this.gl = gl;
  }
  startProcessFrame(width, height) {
    const gl = this.gl;
    if (!this.frame || width !== this.frame.width ||
        height !== this.frame.height) {
      this.frame =
          createTextureFrameBuffer(gl, gl.LINEAR, width, height, this.frame);
    }
    gl.viewport(0, 0, width, height);
    gl.scissor(0, 0, width, height);
    this.program.useProgram();
  }
  setUniform(name, vec) {
    const gl = this.gl;
    const loc = this.program.getUniformLocation(name);

    if (typeof vec === 'number') {
      vec = [vec];
    }
    if (vec.length === 1) {
      gl.uniform1fv(loc, vec);
    } else if (vec.length === 2) {
      gl.uniform2fv(loc, vec);
    } else if (vec.length === 3) {
      gl.uniform3fv(loc, vec);
    } else if (vec.length === 4) {
      gl.uniform4fv(loc, vec);
    }
  }
  bindTextures(textures) {
    const gl = this.gl;
    let textureId = 0;
    for (const [name, tex] of textures) {
      const loc = this.program.getUniformLocation(name);
      // Make the textureId unit active.
      gl.activeTexture(gl.TEXTURE0 + textureId);
      // Binds the texture to a TEXTURE_2D target.
      tex.bindTexture();
      // Binds the texture at given location to texture unit textureId.
      gl.uniform1i(loc, textureId);
      textureId++;
    }
  }
  finalizeProcessFrame() {
    this.frame.bindFramebuffer();
    this.quad.draw();
    return this.frame;
  }
}

// A GPU processing step.
class MaskStep {
  constructor(gl) {
    this.proc = new GlShaderProcessor(gl, FRAGMENT_SHADER);
  }
  process(frame, mask) {
    this.proc.startProcessFrame(frame.width, frame.height);

    for (const uniform of shaderUniforms) {
      const name = uniform[0];
      // Prepend k to match shader naming convention for uniforms.
      this.proc.setUniform('k' + name, +STATE[name]);
    }

    this.proc.bindTextures([['frame', frame], ['mask', mask]]);
    return this.proc.finalizeProcessFrame();
  }
}

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

 const PASSTHROUGH_VERTEX_SHADER = `#version 300 es
 precision highp float;
 in vec4 position;
 in vec4 input_tex_coord;
 out vec2 tex_coord;
 void main() {
   gl_Position = position;
   tex_coord = input_tex_coord.xy;
 }`;
 
 const FRAGMENT_SHADER = `#version 300 es
 precision mediump float;
 uniform sampler2D frame;
 uniform sampler2D mask;
 in highp vec2 tex_coord;
 out vec4 out_color;
 #define uDepth mask
 #define uColor frame
 #define GetDepth(uv) (texture(uDepth, uv).r)
 #define GetColor(uv) (texture(uColor, uv).rgb)
 float saturate(float x) {
   return clamp(x, 0.0, 1.0);
 }
 uniform float kVisualizeDepth;
 vec3 TurboPlus(in float x) {
   const float d = 1. / 32.;
   // if input x is in meters rather than [0-1]: uncomment the following line:
   // if (x < 8f) { x /= 8f; } else { x = (x - 8f) / 24f }
   const vec3[] kColors = vec3[](
     vec3(0.0, 0.0, 0.0), vec3(0.6754, 0.0898, 0.0045), vec3(0.8240, 0.1918, 0.0197), vec3(0.9262, 0.3247, 0.0584), vec3(0.9859, 0.5048, 0.1337), vec3(0.9916, 0.6841, 0.2071), vec3(0.9267, 0.8203, 0.2257), vec3(0.7952, 0.9303, 0.2039), vec3(0.6332, 0.9919, 0.2394), vec3(0.4123, 0.9927, 0.3983), vec3(0.1849, 0.9448, 0.6071), vec3(0.0929, 0.8588, 0.7724), vec3(0.1653, 0.7262, 0.9316), vec3(0.2625, 0.5697, 0.9977), vec3(0.337, 0.443, 0.925), vec3(0.365, 0.306, 0.859),
     vec3(0.4310, 0.1800, 0.827),  vec3(0.576, 0.118, 0.859), vec3(0.737, 0.200, 0.886), vec3(0.8947, 0.2510, 0.9137), vec3(1.0000, 0.3804, 0.8431), vec3(1.0000, 0.4902, 0.7451), vec3(1.0000, 0.5961, 0.6471), vec3(1.0000, 0.6902, 0.6039), vec3(1.0000, 0.7333, 0.6157), vec3(1.0000, 0.7804, 0.6431), vec3(1.0000, 0.8275, 0.6824), vec3(1.0000, 0.8706, 0.7255), vec3(1.0000, 0.9098, 0.7765), vec3(1.0000, 0.9451, 0.8235), vec3(1.0000, 0.9725, 0.8588), vec3(1.0000, 0.9922, 0.8863),
     vec3(1., 1., 1.)
   );
   vec3 col = vec3(0.0);
   for (float i = 0.; i < 32.; i += 1.) {
     col += (step(d*i, x) - step(d *(i+1.), x)) * mix(kColors[int(i)], kColors[int(i+1.)], saturate((x-d*i)/d));
   }
   // Adds the last white colors after 99%.
   col += step(.99, x) * mix(kColors[31], kColors[32], saturate((x-.99)/.01));
   return col;
 }
 // Relights a scene with distance in 3D, see go/motionlights-doc.
 vec3 RenderMotionLights(in vec2 uv) {
   vec3 color = GetColor(uv);
   float depth = GetDepth(uv);
   if (kVisualizeDepth > 0.5f) {
     const float uAlpha = 0.5;
     return mix(TurboPlus(depth), color, uAlpha);
   }
   return color;
 }
 void main() {
   // The user-facing camera is mirrored, flip horizontally.
   vec2 uv = vec2(1.0 - tex_coord[0], tex_coord[1]);
   vec3 rgb = RenderMotionLights(uv);
   out_color = vec4(rgb, 1.0);
 }`;

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

 function getWebGLRenderingContext(canvas) {
  const WEBGL_ATTRIBUTES = {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    depth: false,
    stencil: false,
    failIfMajorPerformanceCaveat: true,
    powerPreference: 'low-power'
  };
  return canvas.getContext('webgl2', WEBGL_ATTRIBUTES);
}

const checkGlError = (gl, label, allowFail = false) => {
  let err = gl.getError();
  let foundError = false;

  while (err != gl.NO_ERROR) {
    let error;

    switch (err) {
      case gl.INVALID_OPERATION:
        error = 'INVALID_OPERATION';
        break;
      case gl.INVALID_ENUM:
        error = 'INVALID_ENUM';
        break;
      case gl.INVALID_VALUE:
        error = 'INVALID_VALUE';
        break;
      case gl.OUT_OF_MEMORY:
        error = 'OUT_OF_MEMORY';
        break;
      case gl.INVALID_FRAMEBUFFER_OPERATION:
        error = 'INVALID_FRAMEBUFFER_OPERATION';
        break;
    }
    // When debugging or running tests, this is a fatal, non-recoverable
    // error. Otherwise program can resume operation.
    if (!allowFail) {
      throw new Error(`GL error: ${error} ${label}`);
    }
    log.error(logger, `GL error: GL_${error}: ${label}`);
    err = gl.getError();

    foundError = true;
  }
  return foundError;
};

const compileShader = (gl, type, src) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  const logMsg = gl.getShaderInfoLog(shader);
  if (logMsg) {
    console.warn(logMsg);
  }
  return shader;
};

// Creates a WebGLTexture from pixel data.
const createWebGLTexture =
  (gl, internalFormat, format, type, filterMode, pixelData, width,
  height) => {
  checkGlError(gl, 'Before Texture::Create');

  const texture = gl.createTexture();

  // Set up the texture.
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filterMode);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filterMode);

  // Create (and load if needed) texture.
  gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
  gl.texImage2D(
      gl.TEXTURE_2D, 0, internalFormat, width, height, 0, format, type,
      pixelData);

  checkGlError(gl, 'Texture::Create');
  return texture;
};

// Returns a wrapper class with a framebuffer and output texture for it.
function createTextureFrameBuffer(gl, filterMode, width, height) {
  const framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

  const texture = createWebGLTexture(
      gl, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, filterMode, null, width,
      height);
  checkGlError(gl, 'TextureFramebuffer::Create: create texture');

  gl.framebufferTexture2D(
      gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

  if (status != gl.FRAMEBUFFER_COMPLETE) {
    throw new Error(`Bad framebuffer status:${status}`);
  }

  return new GlTextureFramebuffer(gl, framebuffer, texture, width, height);
}

// Returns a wrapper class with a texture and its util.
function createTexture(gl, texture, width, height) {
  return new GlTextureImpl(gl, texture, width, height);
}

// Returns a wrapper class with a WebGL program and its util functions.
function createProgram(gl, vertexSrc, fragmentSrc) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
  checkGlError(gl, 'Compile vertex shader');

  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
  checkGlError(gl, 'Compile fragment shader');

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.bindAttribLocation(program, 0, 'position');
  gl.bindAttribLocation(program, 1, 'input_tex_coord');
  gl.linkProgram(program);
  gl.useProgram(program);

  checkGlError(gl, 'createProgram');

  return new GlProgramImpl(gl, program);
}

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

 const videoWidth = window.innerWidth >  480 ? 480 : 640;
 const videoHeight = window.innerHeight > 480 ? 480 : 480;
 
 const STATE = {
   VisualizeDepth: true,
   MinDepth: 0.3,
   MaxDepth: 0.9,
   DepthCachedFrames: 1,
 };
 
 const shaderUniforms = [
   ['VisualizeDepth', 0, 1],
   ['MinDepth', 0, 1],
   ['MaxDepth', 0, 1],
 ];



 /**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

  const videoWidth = window.innerWidth >  480 ? 480 : 640;
  const videoHeight = window.innerHeight > 480 ? 480 : 480;
  
  const STATE = {
    VisualizeDepth: true,
    MinDepth: 0.3,
    MaxDepth: 0.9,
    DepthCachedFrames: 1,
  };
  
  const shaderUniforms = [
    ['VisualizeDepth', 0, 1],
    ['MinDepth', 0, 1],
    ['MaxDepth', 0, 1],
  ];


  /**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

 function isiOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isMobile() {
  return isAndroid() || isiOS();
}

async function setupCamera() {
  video = document.getElementById('video');

  const stream = await navigator.mediaDevices.getUserMedia({
    'audio': false,
    'video': {facingMode: 'user', width: videoWidth, height: videoHeight},
  });
  video.srcObject = stream;

  await new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });

  video.play();
  video.width = videoWidth;
  video.height = videoHeight;
}

function createStatsPanel() {
  stats = new Stats();
  stats.customFpsPanel =
      stats.addPanel(new Stats.Panel('(Model FPS)      ', '#0ff', '#002'));
  stats.showPanel(stats.domElement.children.length - 1);

  statusEl.appendChild(stats.domElement);

  const statsPanes = statusEl.querySelectorAll('canvas');

  for (let i = 0; i < statsPanes.length; ++i) {
    statsPanes[i].style.width = '140px';
    statsPanes[i].style.height = '80px';
  }
}

async function createDepthModel() {
  return tf.loadGraphModel(
      'https://storage.googleapis.com/tfjs-testing/depth/depth_model/model.json');
}

async function createDepthEstimationModel() {
  return depthEstimation.createEstimator(
      depthEstimation.SupportedModels.ARPortraitDepth, {runtime: 'tfjs'});
}

async function createFaceModel() {
  return faceDetection.createDetector(
      faceDetection.SupportedModels.MediaPipeFaceDetector, {runtime: 'tfjs'});
}

async function setupPage() {
  await setupCamera();
  model = await createDepthModel();
  estimator = await createDepthEstimationModel();
  faceDetector = await createFaceModel();
  await setupDatGui();
  createStatsPanel();
  init();
}

function beginEstimateSegmentationStats() {
  startInferenceTime = (performance || Date).now();
}

function endEstimateSegmentationStats() {
  const endInferenceTime = (performance || Date).now();
  inferenceTimeSum += endInferenceTime - startInferenceTime;
  ++numInferences;

  const panelUpdateMilliseconds = 1000;
  if (endInferenceTime - lastPanelUpdate >= panelUpdateMilliseconds) {
    const averageInferenceTime = inferenceTimeSum / numInferences;
    inferenceTimeSum = 0;
    numInferences = 0;
    stats.customFpsPanel.update(
        1000.0 / averageInferenceTime, 120 /* maxValue */);
    lastPanelUpdate = endInferenceTime;
  }
}



let video, model, stats;
let estimator;
let faceDetector;
let startInferenceTime, numInferences = 0;
let inferenceTimeSum = 0, lastPanelUpdate = 0;
let applyMask;
let canvasEl;
let gl;
let inputTextureFrameBuffer;

const statusEl = document.querySelector('#status');

function createCanvas() {
  canvasEl = document.createElement('canvas');
  mouseX = videoWidth / 2;
  mouseY = videoHeight / 2;
  canvasEl.width = videoWidth;
  canvasEl.height = videoHeight;
  canvasEl.style.width = `${videoWidth}px`;
  canvasEl.style.height = `${videoHeight}px`;
  canvasEl.addEventListener('mousedown', ev => {
    const rect = ev.target.getBoundingClientRect();
    // The user-facing camera is mirrored, flip horizontally.
    mouseX = rect.right - ev.clientX + rect.left;
    mouseY = ev.clientY - rect.top;
  }, false);

  const wrapper = document.querySelector('.main');
  wrapper.innerHTML = '';
  wrapper.appendChild(canvasEl);

  gl = getWebGLRenderingContext(canvasEl);
  applyMask = new MaskStep(gl);
  inputTextureFrameBuffer =
      createTextureFrameBuffer(gl, gl.LINEAR, videoWidth, videoHeight);
}

/**
 * Returns a pair of transform from an interval to another interval.
 * @param {number} fromMin - min of the start interval.
 * @param {number} fromMax - max of the start interval.
 * @param {number} toMin - min of the ending interval.
 * @param {number} toMax - max of the ending interval.
 */
function transformValueRange(fromMin, fromMax, toMin, toMax) {
  const fromRange = fromMax - fromMin;
  const ToRange = toMax - toMin;
  const scale = ToRange / fromRange;
  const offset = toMin - fromMin * scale;
  return {scale, offset};
}

async function init() {
  createCanvas();

  const customBackendName = 'custom-webgl';

  const kernels = tf.getKernelsForBackend('webgl');
  kernels.forEach(kernelConfig => {
    const newKernelConfig = {...kernelConfig, backendName: customBackendName};
    tf.registerKernel(newKernelConfig);
  });
  tf.registerBackend(customBackendName, () => {
    return new tf.MathBackendWebGL(new tf.GPGPUContext(gl));
  });
  await tf.setBackend(customBackendName);

  let cachedData = null;
  const predict = async () => {
    // Put original video content on the input texture.
    inputTextureFrameBuffer.bindTexture();
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB8, gl.RGB, gl.UNSIGNED_BYTE, video);

    let data;
    if (numInferences % STATE.DepthCachedFrames === 0) {
      if (cachedData) {
        // Make sure to dispose all tensors, otherwise there will be memory
        // leak.
        cachedData.tensorRef.dispose();
      }

      // Extract face.
      const faces = await faceDetector.estimateFaces(video);

      let output4D;
      if (faces.length === 0) {
        output4D = tf.zeros([videoHeight, videoWidth, 1]);
      } else {
        const face = faces[0];

        const rightEye = face.keypoints[0];
        const leftEye = face.keypoints[1];
        const nose = face.keypoints[2];

        const rightEyePoint = [rightEye.x, rightEye.y];
        const leftEyePoint = [leftEye.x, leftEye.y];
        const eyesDistance =
            Math.sqrt(tf.util.distSquared(rightEyePoint, leftEyePoint));

        const scaleDistTo64 = 64 / eyesDistance;

        let portraitHeight, portraitWidth;
        let sliceStart, sliceSize;
        let rescaledEyeHeight, rescaledEyeWidth;
        const portraitPadded = tf.tidy(() => {
          const image1Tensor = tf.browser.fromPixels(video);
          const image1Float = tf.cast(image1Tensor, 'float32');
          // Resize until distance of eyes is 192 / 3 = 94.
          const rescaledEye = tf.image.resizeBilinear(image1Float, [
            Math.round(videoHeight * scaleDistTo64),
            Math.round(videoWidth * scaleDistTo64)
          ]);
          [rescaledEyeHeight, rescaledEyeWidth] = rescaledEye.shape;

          // Find position of nose in rescaled image.
          const nosePoint = [
            Math.round(nose.x * scaleDistTo64),
            Math.round(nose.y * scaleDistTo64)
          ];

          sliceStart = [
            Math.max(0, nosePoint[1] - 256 / 2),
            Math.max(0, nosePoint[0] - 192 / 2), 0
          ];
          sliceSize = [
            Math.min(rescaledEyeHeight - sliceStart[0], 256),
            Math.min(rescaledEyeWidth - sliceStart[1], 192), 3
          ];

          // Make a crop centered at the nose.
          const portraitCrop = tf.slice(rescaledEye, sliceStart, sliceSize);
          [portraitHeight, portraitWidth] = sliceSize;

          // Pad if the not enough pixels are around the nose.
          return tf.pad(
              portraitCrop,
              [[0, 256 - portraitHeight], [0, 192 - portraitWidth], [0, 0]]);
        });

        beginEstimateSegmentationStats();

        const output = await estimator.estimateDepth(
            portraitPadded,
            {minDepth: STATE.MinDepth, maxDepth: STATE.MaxDepth});

        portraitPadded.dispose();

        const depthMap = await output.toTensor();

        tf.tidy(() => {
          // Remove padding added in `portraitPadded`.
          const outputUnpadded =
              tf.slice(depthMap, 0, [portraitHeight, portraitWidth]);
          depthMap.dispose();

          // Add pixels removed by nose crop in `portraotCrop`.
          const outputRescaledEye = tf.pad(outputUnpadded, [
            [sliceStart[0], rescaledEyeHeight - (sliceStart[0] + sliceSize[0])],
            [sliceStart[1], rescaledEyeWidth - (sliceStart[1] + sliceSize[1])],
          ]);

          const outputChannel =
              tf.expandDims(tf.expandDims(outputRescaledEye, 0), 3);

          // Rescale to original input size.
          const outputResized =
              tf.image.resizeBilinear(outputChannel, [videoHeight, videoWidth]);

          // Pad from 1 channel to 4 channel to match input image channels.
          output4D = tf.pad(outputResized, [[0, 0], [0, 0], [0, 0], [0, 3]], 1);

          endEstimateSegmentationStats();

          return output4D;
        });
      }
      try {
        // Get the tensor result and the texture that holds the data.
        // We tell the system to use the video width and height as the tex
        // shape, this allows the densely packed data to have the same layout
        // as the original video content, which simplifies the shader logic.
        // This only works if the data shape is [1, height, width, 4].
        data = output4D.dataToGPU({customTexShape: [videoHeight, videoWidth]});
        // If data happens to be on CPU.
      } catch (error) {
        output4D.dispose();
        requestAnimationFrame(predict);
        return;
      }
      // Sync data to CPU to ensure sync and FPS is accurate.
      output4D.dataSync();

      // Ensure GPU is done for timing purposes.
      const webGLBackend = tf.backend();
      const buffer =
          webGLBackend.gpgpu.createBufferFromTexture(data.texture, 1, 1);
      webGLBackend.gpgpu.downloadFloat32MatrixFromBuffer(buffer, 1);
    } else {
      data = cachedData;
    }

    // Combine the input texture and tensor texture with additional shader
    // logic. In this case, we just pass through foreground pixels and make
    // background pixels more transparent.
    const result = applyMask.process(
        inputTextureFrameBuffer,
        createTexture(gl, data.texture, videoWidth, videoHeight));

    // Making gl.DRAW_FRAMEBUFFER to be null sets rendering back to default
    // framebuffer.
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    // Caching the data of the result texture to be drawn in the
    // gl.READ_FRAMEBUFFER.
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, result.framebuffer_);
    // Transfer the data from read framebuffer to the default framebuffer to
    // make it show on canvas.
    gl.blitFramebuffer(
        0, 0, videoWidth, videoHeight, 0, videoHeight, videoWidth, 0,
        gl.COLOR_BUFFER_BIT, gl.LINEAR);

    // Make sure to dispose all tensors, otherwise there will be memory leak.
    // data.tensorRef.dispose();
    cachedData = data;

    requestAnimationFrame(predict);
  };

  predict();
}

setupPage();