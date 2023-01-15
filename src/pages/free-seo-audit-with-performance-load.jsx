import React from 'react';
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { device } from '../styles/Global';

const StyledAbout = styled.section`
  min-height: 100vh;
  max-width: 90vw;
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 3rem 0;

  span {
    line-height: 1.3rem;
  }
  .my__form {
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 3rem auto;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  label {
    margin-top: 1rem;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 2.3rem;
    padding-left: 0.6rem;
    font-family: inherit;
    background-color: rgb(255, 255, 255);
    background-clip: padding-box;
    border: 1px solid rgb(34, 37, 42);
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  input:focus {
    outline: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(181, 186, 245);
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 7rem;
    padding-left: 0.6rem;
    font-family: inherit;
    padding-top: 0.6rem;
    background-color: rgb(255, 255, 255);
    background-clip: padding-box;
    border: 1px solid rgb(34, 37, 42);
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  textarea:focus {
    outline: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(181, 186, 245);
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }
  button {
    height: 2.3rem;
    width: 8rem;
    cursor: pointer;
    margin-top: 2rem;
    border: 1px solid rgb(217, 220, 225);
    border-radius: 0.25rem;
    color: white;
    font-size: 18px;
    background-color: #4f7dfd;
  }

  h1 {
    margin-top: unset;
    font-size: 2.3rem;
    line-height: 1.2;
    width: 95%;
    margin: auto;
    @media ${device.mobileL} {
      font-size: 1.9rem;
    }
  }
  h3 {
    width: 95%;
    margin: 2rem auto;
  }

  img {
    margin-bottom: 4rem;
    width: 100%;
  }
  span {
    color: inherit;
    margin-bottom: 4rem;
  }
  .cv-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: auto;
  }

  #Layer_1 {
    animation: fill 2s linear infinite;
  }

  path {
    stroke-dasharray: 0 1000;
    animation: draw 2s linear infinite;
    stroke: black;
  }

  @keyframes draw {
    from {
      stroke-dasharray: 0 1000;
    }
    to {
      stroke-dasharray: 1000 0;
    }
  }

  @keyframes fill {
    from {
      fill: none;
    }
    to {
      fill: black;
    }
  }
`;
function seo() {



  return (
    <>
      <StyledAbout>
        <Helmet>
          <script src="/seo.js" type="text/javascript" />
        </Helmet>

        <div id="body">
          <form id="formId">
            <label for="inputId">Url</label>
            <input id="inputId" placeholder="es https://casafraine.com" type="text" />
            <button type="submit">Run Audit</button>
          </form>
        </div>
      </StyledAbout>
    </>

  );

};

export default seo;
