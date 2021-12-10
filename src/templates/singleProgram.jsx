import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { device } from "../styles/Global";


export const StyledArticle = styled.article`
  padding: 3rem 1.5rem;
  box-sizing: border-box;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: white;
  width: 80%;
  margin: 1rem auto;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  border-top: 0.8rem solid lightseagreen;

  .language-text {
    padding: 0 0.5rem;
  }
  pre {
    padding: 1.8rem 0.5rem !important;
  }

  @media ${device.tablet} {
    width: 98%;
    overflow: hidden;
    padding: 1rem 0.7rem;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: 18px;

    & img {
      width: 100%;
    }
  }
  ul {
    padding-left: 1.1rem;
    & li {
      margin-bottom: 1rem;
    }
  }
`;

export const StyledSection = styled.section`
  padding: 2rem 0;
  position: relative;
  .gatsby-image-wrapper {
    width: 80%;
    display: flex !important;
    justify-self: center;
    align-self: center;
    margin: auto;
    min-height: 78vh;

    @media ${device.tablet} {
      width: 95%;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2.3rem;
  line-height: 1.3;
  width: 80%;
  margin: 4rem auto 2rem auto;
  @media ${device.tablet} {
    width: 95%;
    margin: 0rem auto 1.5rem auto;
  }
`;
const Bottomlinks = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    width: 95%;
  }
  a {
    text-decoration: none;
    color: inherit;
    width: fit-content;
    transition: color 200ms linear;
    @media ${device.tablet} {
      font-size: 0.9rem;
    }
  }
  a:hover {
    color: firebrick;
  }
  div {
    width: 100%;
    align-self: center;
  }
`;
const StyledTime = styled.time`
  display: block;
  font-size: 1.2rem;
  width: 80%;
  color: grey;
  margin: 3rem auto 1.5rem auto;
  @media ${device.tablet} {
    width: 95%;
  }
`;

const singleProgram = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <>
      <Helmet>
        <title>{`${pageContext.pro.name}`}</title>
        <meta
          property="og:url"
          content={`https://vincenzo.codes/${pageContext.pro.id}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageContext.pro.name} />
        <meta
          property="og:description"
          content="What are you hacking on"
        />
      </Helmet>
      <StyledSection>
        <StyledTitle>{pageContext.pro.name}</StyledTitle>

        <StyledArticle>
          <ul>
            <li>Disabled:&nbsp;{pageContext.pro.disabled.toString()}</li>
            <li>Managed:&nbsp;{pageContext.pro.managed.toString()}</li>
            <li>Max Bounty:&nbsp;{pageContext.pro.max_bounty}</li>
            <li>Min Bounty:&nbsp;{pageContext.pro.min_bounty}</li>
            <li>Public:&nbsp;{pageContext.pro.public.toString()}</li>
          </ul>

          <h2>In scope:</h2>
          {pageContext.pro.targets.in_scope.map((co) => {
            return (
              <li>
                {co.target}&nbsp;type:{co.type}
              </li>
            );
          })}
        </StyledArticle>

        <br />
        <br />
        <br />
      </StyledSection>
    </>
  );
};

export default singleProgram;
