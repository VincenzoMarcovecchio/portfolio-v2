import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { device } from "../styles/Global";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

export const query = graphql`
  query Projects2 {
    allImageSharp(
      sort: { fields: fixed___originalName, order: ASC }
      limit: 17
    ) {
      edges {
        node {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  }
`;

export const StyledDiv = styled.div`
  .wrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 80rem;
    padding-bottom: 4rem;
  }
  ul {
    padding: 1rem;
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



function project({ data }) {
  let links = [
    "https://vincenzomarcovecchio.github.io/Spotify-clone/",
    "https://www.firststepintospace.com/",
    "https://vincenzomarcovecchio.github.io/Intro-Component-With-Sign-Up-Form/",
    "https://vincenzomarcovecchio.github.io/FRAINE-RICICLA/",
    "https://fragine.netlify.app/",
    "https://lemiepoesie.com/",
    "https://prolocofraine.org/",

    "https://vincenzomarcovecchio.github.io/BookMark-Landing-Page/",
    "https://vincenzomarcovecchio.github.io/MyFriend-Barber-Website/",

    "https://resort-beach.vercel.app/rooms",

    "https://vincenzomarcovecchio.github.io/BankEasy/",
    "https://vincenzomarcovecchio.github.io/Insure-Website/",
    "https://vincenzomarcovecchio.github.io/Manage-Landing-Page/",
    "https://storage-upload.vercel.app/",
    "https://dine.now.sh/",
    "https://ciatapp.herokuapp.com/",
    "https://mrtoastvastomarina.com/",
    "https://vincenzomarcovecchio.github.io/Minesweeper/",
  ];

  return (
    <>
      <StyledDiv>
        <Tabs>
          <TabList>
            <Tab>Development</Tab>
            <Tab>Hacking</Tab>
            <Tab>Translation</Tab>
            <Tab>Work experience</Tab>
          </TabList>

          <TabPanel>
            <section className="wrapper">
              <h1>Some of my latest projects 🛠️</h1>
              <h2>Technologies I use 🚧🚧</h2>
              <h3><a href="https://www.frontendmentor.io/profile/VincenzoMarcovecchio" target="_blank" rel="noopener noreferrer canonical">Please check out my frontend mentor profile!</a></h3>
              <ul>
                <li>
                  React, create-react-app (useState, useEffect, useMemo,
                  useCallback)
                </li>
                <li>Next.js (api routes, prisma, strapi, mongodb)</li>
                <li>
                  D3 for data visualization and some other React libraries
                </li>
                <li>
                  CSS SCSS styled components material ui bootstrap tailwind
                </li>
                <li>express express-router handlebars ejs passportjs Oauth</li>
                <li>stripe snipcart paypal for payment handling</li>
              </ul>
              <div className="cols">
                {data.allImageSharp.edges.map(({ node: work }, index) => {
                  return (
                    <figure key={index} className="col">
                      <div className="container">
                        <Img fluid={work.fluid} className="front" />
                        <div className="back">
                          <div className="inner">
                            <figcaption>
                              <a
                                target="_blank"
                                title="check out the live site"
                                rel="noopener noreferrer canonical"
                                href={links[index]}
                              >
                                live site
                              </a>
                            </figcaption>
                          </div>
                        </div>
                      </div>
                      <div>hover me!</div>
                    </figure>
                  );
                })}
                
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="wrapper">

              <ul>
                <li>
                  Ip spoofing leading to creadentials stealing (asp.net)
                </li>
                <li>Open Redirect (out of scope)</li>
                <li>PHP info found (disclosure of information)</li>
              </ul>


            </section>
          </TabPanel>
          <TabPanel>
            <section className="wrapper">

              <ul>
                <li>
                https://www.redhotcyber.com/post/satoshi-nakamoto-l-inventore-del-bitcoin/
                </li>
                <li>https://www.redhotcyber.com/en/post/rhc-ransomware-data-room-january-2022/</li>
                <li>https://www.redhotcyber.com/en/post/nuclear-rearmament-cyber-guerrillas-and-cyber-crime/</li>
              </ul>


            </section>
          </TabPanel>
        </Tabs>
      </StyledDiv>
    </>
  );
}

export default project;
