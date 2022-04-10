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
  ul {
    padding: 1.5rem;
    list-style: mongolian;
  }
  h1 {
    font-size: 2.5rem;
    width: 95%;

    margin: 3rem auto 3rem 0;
    line-height: 1.2;
    @media ${device.mobileL} {
      padding: 0;
      font-size: 1.9rem;
    }
  }
  .cols {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .col {
    width: calc(25% - 2rem);
    margin: 1rem;
    cursor: pointer;
  }

  .container {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .front,
  .back {
    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-position: center;
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
      -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 280px;
    height: auto;
    border-radius: 10px;
    color: #fff;
    font-size: 1.5rem;
    object-fit: cover;
  }

  .back {
    background: #cedce7;
    background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
    background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
    background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  }

  .front:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    opacity: 0.1;
    background-color: #000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
  }
  .container:hover .front,
  .container:hover .back {
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
      -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .inner {
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 2rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
  }

  .container .back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .container .front {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .container:hover .back {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .container:hover .front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .front .inner p {
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
  }

  .front .inner p:after {
    content: "";
    width: 4rem;
    height: 2px;
    position: absolute;
    background: #c6d4df;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -0.75rem;
  }

  .front .inner span {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Montserrat";
    font-weight: 300;
  }

  figcaption a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: black !important;
  }
  img {
    object-fit: contain;
  }
  @media screen and (max-width: 64rem) {
    .col {
      width: calc(33.333333% - 2rem);
    }
  }

  @media screen and (max-width: 48rem) {
    .col {
      width: calc(50% - 2rem);
    }
  }

  @media screen and (max-width: 32rem) {
    .col {
      width: 100%;
      margin: 0 0 2rem 0;
    }
  }
`;



function Encoder() {
  
function encode() {
  var obj = document.getElementById('dencoder');
  var unencoded = obj.value;
  obj.value = encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
}
function decode() {
  var obj = document.getElementById('dencoder');
  var encoded = obj.value;
  obj.value = decodeURIComponent(encoded.replace(/\+/g, " "));
}
  return (
    <>
      <StyledDiv>
        <form onSubmit="return false;">
          <h1>URL Decoder/Encoder</h1>
          <textarea cols="100" rows="20" id="dencoder"></textarea>
          <div>
            <input type="button" onClick={encode()} value="Encode" />
            <input type="button" onClick={decode()} value="Decode" />
          </div>
          <ul>
            <li>Input a string of text and encode or decode it as you like.</li>
            <li>Handy for turning encoded JavaScript URLs from complete gibberish into readable gibberish.</li>
            <li>If you'd like to have the URL Decoder/Encoder for offline use, just view source and save to your hard drive.</li>
          </ul>
        </form>
      </StyledDiv>
    </>
  );
}

export default Encoder;
