import React, { useState } from 'react';
import cv from '../../resume.png';
import styled from 'styled-components';
import axios from 'axios';

const StyledAbout = styled.section`
  min-height: 100vh;
  max-width: 90vw;
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 7rem 0;

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
    font-size: 2.5rem;
    line-height: 1.3;
  }
  h2 {
    line-height: 1.3;
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

const About = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/d4fc06ae-d2f0-4f8b-9ea7-7e4176e23cbc',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <StyledAbout>
      <>
        <h1>I run, I eat, I code, I repeat </h1>
        <h2>
          Send me a message through this form down below or check out my other
          site&nbsp;
          <a
            href="https://casafraine.com"
            rel="canonical noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          . Thanks
        </h2>
        <form className="my__form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              name="name"
              id="exampleInputName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
            />
          </div>

          <div className="form-group">
            <label htmlFor="textarea">Message</label>
            <textarea
              aria-label="textarea"
              required
              placeholder="What is up"
              name="message"
            ></textarea>
          </div>
          <button type="submit" disabled={serverState.submitting}>
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? 'errorMsg' : 'errorMsg'}>
              {serverState.status.msg}
            </p>
          )}
        </form>
        <div className="cv-container">
          <span className="downloadcv">Download my cv</span>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="10rem"
            height="10rem"
            viewBox="0 0 419.53 419.53"
            enableBackground="new 0 0 419.53 419.53"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M73.568,158.622c1.959,5.121,9.754,27.9,29.194,47.033
        c18.778,19.701,49.201,35.757,81.08,40.525c31.804,5.326,65.076-0.639,87.908-12.158c23.354-10.975,36.27-27.508,39.33-30.731
        c-4.34,3.405-7.637,5.478-10.793,7.747c-41.631,29.559-94.043,36.697-140.812,21.125c-28.186-9.512-54.365-27.333-73.556-54.696
        C81.727,171.48,77.352,165.399,73.568,158.622z"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M252.9,194.536c5.219,7.079,23.822,11.452,43.012,3.894
        c19.043-6.623,38.67-25.178,42.578-42.331c-3.195,3.541-5.727,5.907-8.207,8.384c-12.635,12.584-26.521,21.746-40.482,26.582
        c-9.738,3.366-19.307,3.707-28.355,3.59C258.955,194.612,256.432,194.72,252.9,194.536z"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M285.43,263.432c2.107-1.586,4.439-3.18,6.148-4.9
        c7.586-7.635,14.059-15.826,19.924-24.398c12.559-18.348,23.68-38.417,31.092-60.977c1.174-3.569,1.928-7.134,2.713-10.75
        c0.221-1.018,0.445-2.039,0.656-3.063c-0.52,0.084-1.035,0.164-1.553,0.24c-1.941,3.685-4.338,7.116-6.088,10.646
        c-17.201,34.106-34.742,58.098-50.664,84.038c-1.9,3.039-2.762,5.992-4.244,8.969C284.084,263.307,284.756,263.371,285.43,263.432z
        "
              />
            </g>
          </svg>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://firebasestorage.googleapis.com/v0/b/myporfolio-d1ae8.appspot.com/o/cv%2FVincenzo%20Marcovecchio1.pdf?alt=media&amp;token=657a7a4a-161d-4b5b-aa98-ffe045ee5b2e"
            download
          >
            <img title="download my cv" alt="cv icon" src={cv} />
          </a>
        </div>
      </>
    </StyledAbout>
  );
};

export default About;
