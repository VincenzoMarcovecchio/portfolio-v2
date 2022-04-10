import React from "react";
import styled from "styled-components";
import { device } from "../styles/Global";


const StyledDiv = styled.div`
form {margin: 0;}
h1 {font-family: Arial, sans-serif; line-height: 0.85em; border-bottom: 2px solid;
  margin-bottom: 0.33em; padding-bottom: 0;}

textarea {background: #EEF;}

#footer {border-top: 1px solid #000; color: #999; font: italic 75% sans-serif;}
#footer p {margin: 0 0 1em 0;}
#footer img {float: right; margin: 0 0 0.5em 2em;}
  .wrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 80rem;
    padding-bottom: 4rem;
  }
`;



function Encoder() {

  function encode() {
    if (typeof window !== 'undefined') {
      var obj = document.getElementById('dencoder');
      var unencoded = obj.value;
      obj.value = encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
    }
  }
  function decode() {
    if (typeof window !== 'undefined') {
      var obj = document.getElementById('dencoder');
      var encoded = obj.value;
      obj.value = decodeURIComponent(encoded.replace(/\+/g, " "));
    }
  }
  return (
    <>
      <StyledDiv>
      <section className="wrapper">
        <form onSubmit="return false;">
          <h1>URL Decoder/Encoder</h1>
          <textarea cols="100" rows="20" id="dencoder"></textarea>
          <div>
            <input type="button" onClick={encode} value="Encode" />
            <input type="button" onClick={decode} value="Decode" />
          </div>
          <ul>
            <li>Input a string of text and encode or decode it as you like.</li>
            <li>Handy for turning encoded JavaScript URLs from complete gibberish into readable gibberish.</li>
            <li>If you'd like to have the URL Decoder/Encoder for offline use, just view source and save to your hard drive.</li>
          </ul>
        </form>
        </section>
      </StyledDiv>
    </>
  );
}

export default Encoder;
