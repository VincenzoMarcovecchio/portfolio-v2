import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import styled from "styled-components";

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

  hr {
    margin: 5rem auto;
  }
`;

const StyledSection = styled.section`
  padding: 2rem;
  position: relative;
  .gatsby-image-wrapper {
    width: 80%;
    display: flex !important;
    justify-self: center;
    object-fit:contain;
    align-self: center;
    margin: auto;
    min-height: 38vh;

    @media ${device.tablet} {
      width: 95%;
    }
  }
`;

const StyledTitle = styled.h1`
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
class Stack extends React.Component {
  
  render() {

    let {pro} = this.props

    let {pageContext} = this.props


    console.log(pro,pageContext)

    return (
      <>
<Helmet>
<title>{`${pageContext.pro.title} | ${config.siteTitle}`}</title>
</Helmet>
<StyledArticle>
  <StyledSection>
  <StyledTitle>{pageContext.pro.title}</StyledTitle>
  <div dangerouslySetInnerHTML={{__html: pageContext.pro.body_markdown}}></div>
  <p>{pageContext.pro.link}</p>
  </StyledSection>
  </StyledArticle>
   </>
    );
  }
}

export default Stack;
