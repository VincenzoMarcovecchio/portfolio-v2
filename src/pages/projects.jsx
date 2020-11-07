import React from 'react';
import styled from 'styled-components';
import Layout from '../layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export const query = graphql`
  query Projects {
    allImageSharp {
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

const StyledDiv = styled.div`
  .wrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 80rem;
  }
  h1 {
    font-size: 2rem;
    margin: 3rem auto;
    text-align: left;
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
    content: '';
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
    content: '';
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
    font-family: 'Montserrat';
    font-weight: 300;
  }

  figcaption a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
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
export default function project({ data }) {
  let links = [
    'https://storage-upload.vercel.app/',
    'https://vincenzomarcovecchio.github.io/FRAINE-RICICLA/',
    'https://ciatapp.herokuapp.com/',
    'https://vincenzomarcovecchio.github.io/Intro-Component-With-Sign-Up-Form/',
    'https://vincenzomarcovecchio.github.io/Manage-Landing-Page/',
    'https://meme-for-fun.com',
    'https://vincenzomarcovecchio.github.io/Insure-Website/',
    'https://vincenzomarcovecchio.github.io/BankEasy/',
    'https://resort-beach.vincenzomarcovecchio.now.sh/',
    'https://dine.now.sh/',
    'https://felineknowledge.com',
    ' https://vincenzomarcovecchio.github.io/Minesweeper/',
    'https://vincenzomarcovecchio.github.io/Spotify-clone/',
  ];
  return (
    <>
      <Layout>
        <StyledDiv>
          <section className="wrapper">
            <h1>Some of my latest projects</h1>
            <div className="cols">
              {data.allImageSharp.edges.map(({ node: work }, index) => {
                const linkcontent = links[index];
                return (
                  <figure key={index} className="col">
                    <div className="container">
                      <Img fluid={work.fluid} className="front" />

                      <div className="back">
                        <div className="inner">
                          <figcaption>
                            <a
                              target="_blank"
                              name="check out the live site"
                              rel="noopener noreferrer canonical"
                              href={linkcontent}
                            >
                              live site
                            </a>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </figure>
                );
              })}
            </div>
          </section>
        </StyledDiv>
      </Layout>
    </>
  );
}