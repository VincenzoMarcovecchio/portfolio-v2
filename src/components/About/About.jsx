import React, { useState } from 'react';
import cv from '../../resume.png';
import styled from 'styled-components';

const StyledAbout = styled.section`
  min-height: 100vh;
  text-align: center;
  max-width: 600px;
  margin: auto;

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
    margin-top: 0.5rem;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 2rem;
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
    margin-top: 1.5rem;
    border: 1px solid rgb(217, 220, 225);
    border-radius: 0.25rem;
    color: white;
    font-size: 18px;
    background-color: #4f7dfd;
  }

  h1 {
    font-size: 2.5rem;
    margin: 3rem auto;
  }
  img {
    display: block;
    margin: 2rem auto;
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
    fetch({
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
          <label htmlFor="email" required="required">
            Email address
          </label>
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
      <img title="download my cv" alt="cv icon" src={cv} />
    </StyledAbout>
  );
};

export default About;
