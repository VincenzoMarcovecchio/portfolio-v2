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

const [url, setUrl] = React.useState("")

  const url = setUpQuery();

  function setUpQuery() {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=';
    let queryUrl = url
    const parameters = {
      url: encodeURIComponent(queryUrl)
    };
    let query = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${queryUrl}?`;
    return query
  }


  function showInitialContent(id) {

    const body = typeof window !== "undefined" && document.getElementById("body")
    const title = typeof window !== "undefined" && document.createElement('h1');
    title.textContent = 'PageSpeed Insights API Demo';
    body.appendChild(title);
    const page = typeof window !== "undefined" && document.createElement('p');
    page.textContent = `Page tested: ${id}`;
    body.appendChild(page);
  }

  function showCruxContent(cruxMetrics) {
    const body = typeof window !== "undefined" && document.getElementById("body")
    const cruxHeader = typeof window !== "undefined" && document.createElement('h2');
    cruxHeader.textContent = "Chrome User Experience Report Results";
    body.appendChild(cruxHeader);
    for (key in cruxMetrics) {
      const p =  typeof window !== "undefined" && document.createElement('p');
      p.textContent = `${key}: ${cruxMetrics[key]}`;
      body.appendChild(p);
    }
  }

  function showLighthouseContent(lighthouseMetrics) {
    const body = typeof window !== "undefined" && document.getElementById("body")
    const lighthouseHeader = typeof window !== "undefined" && document.createElement('h2');
    lighthouseHeader.textContent = "Lighthouse Results";
    body.appendChild(lighthouseHeader);
    for (key in lighthouseMetrics) {
      const p = typeof window !== "undefined" && document.createElement('p');
      p.textContent = `${key}: ${lighthouseMetrics[key]}`;
      body.appendChild(p);
    }
  }
  


  return (
    <>

      <Helmet>
        <title>Free SEO Audit Metrics with Performance Load — Vincenzo Codes</title>
        <meta name="title" content="Free SEO Audit Metrics with Performance Load — Vincenzo Codes" />
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how
 your webpage will look on Google, Facebook, Twitter and more!"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="og:description" content="With Meta Tags you can edit and
 experiment with your content then preview how 
 your webpage will look on Google, Facebook, Twitter and more!"/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment
 with your content then preview how your webpage
  will look on Google, Facebook, Twitter and more!"/>
        <meta property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Helmet>
      <StyledAbout>
        <div id="body">
          <form id="formId" onSubmit={(evt) => {

            evt.preventDefault();
            evt.stopPropagation();
            fetch(url)
              .then(response => response.json())
              .then(json => {
                // See https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#response
                // to learn more about each of the properties in the response object.
                showInitialContent(json.id);
                const cruxMetrics = {
                  "First Contentful Paint": json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
                  "First Input Delay": json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
                };
                showCruxContent(cruxMetrics);
                const lighthouse = json.lighthouseResult;
                console.log(json);
                console.log(lighthouse);
                const lighthouseMetrics = {
                  'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
                  'Speed Index': lighthouse.audits['speed-index'].displayValue,
                  'Time To Interactive': lighthouse.audits['interactive'].displayValue,
                  'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
                };
                showLighthouseContent(lighthouseMetrics);
              });



          }}>
            <label for="inputId">Url</label>
            <input id="inputId" onChange={(e) => setUrl(e.target.value)} placeholder="es https://casafraine.com" type="text" />
            <button type="submit">Run Audit</button>
          </form>
        </div>
      </StyledAbout>
    </>

  );

};

export default seo;
