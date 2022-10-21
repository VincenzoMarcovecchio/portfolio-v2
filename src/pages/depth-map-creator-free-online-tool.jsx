import React from 'react';

const Tensor = () => (
  <div>

<div id="status"></div>
<br />
<div class="main">
  <canvas></canvas>
</div>
<div>
  <h1>AR Portrait Depth map demo</h1>
  <p>Refer to <a href="https://storage.googleapis.com/tfjs-models/demos/3dphoto/index.html">this link</a> for 3D photo
    effects. For 3D portraits effects and more creative usage (e.g.,
    depth-of-field, depth-scanning effects) of depth maps, you can checkout <a
      href="https://augmentedperception.github.io/depthlab/">DepthLab</a>.</p>
</div>
<video id="video" playsinline style={{
  visibility: "hidden",
  width: "auto",
  height: "auto",
}}>
</video>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-segmentation"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/depth-estimation"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/face-detection"></script>
<script src="js/gl-shaders.js"></script>
<script src="js/gl-class.js"></script>
<script src="js/gl-util.js"></script>
<script src="js/ui-util.js"></script>
<script src="js/params.js"></script>
<script src="js/dat-gui.js"></script>
<script src="js/index.js"></script>
  </div>
);

export default React.memo(Tensor);


