import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { device } from "../styles/Global";
import Img from "gatsby-image";
import { Link } from "gatsby";

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

const StyledSection = styled.section`
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

export default class PostTemplate extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "VincenzoMarcovecchio/portfolio-v2");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "dark-blue");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    const comments = document.getElementById("comments-container");
    if (comments) comments.appendChild(script);
  }

  render() {
    const { data, pageContext } = this.props;
    const { slug, image, nexttitle, nextslug, prevtitle, prevslug } =
      pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }

    const match = String(slug).substring(1);

    const result = image.filter((image) => {
      return image.node.name == match;
    });

    return (
      <>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
       
        <SEO postPath={slug} postNode={postNode} postSEO />
       
        <StyledSection>
          <StyledTitle>{post.title}</StyledTitle>
          <Img
            objectFit="cover"
            fluid={result[0]?.node.childImageSharp.fluid}
            alt={post.title}
          />
          <StyledTime datetime={post.date}>{post.date}</StyledTime>
          <StyledArticle
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          ></StyledArticle>
          <PostTags tags={post.tags} />
          <SocialLinks postPath={slug} postNode={postNode} />
          <Bottomlinks>
            <Link to={prevslug}>&lArr;&nbsp;{prevtitle}</Link>
            <Link to={nextslug}>{nexttitle}&nbsp;&rArr;</Link>
          </Bottomlinks>
          <Bottomlinks>
            <div id="comments-container"></div>
          </Bottomlinks>
          <br />
          <br />
          <br />
        </StyledSection>
      </>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlugl2($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        cover
        date(formatString: "MMMM Do YYYY")
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
