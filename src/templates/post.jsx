import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import UserInfo from '../components/UserInfo/UserInfo';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import styled from 'styled-components';
import { device } from '../styles/Global';
const StyledArticle = styled.article`
  padding: 3rem 1.5rem;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  background-color: white;
  width: 80%;
  margin: 1rem auto;
  @media ${device.tablet} {
    width: 95%;
    overflow: hidden;
  }

  h2 {
    margin: 1rem auto;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  ul {
    margin-bottom: 1rem;
    padding: 0 0 0 0.5rem;
  }
`;
const StyledSection = styled.section`
  padding: 2rem 0;
`;
const StyledTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  width: 80%;
  margin: 1rem auto 2rem auto;
  @media ${device.tablet} {
    width: 95%;
  }
`;
const StyledTime = styled.time`
  display: block;
  font-size: 0.9rem;
  width: 80%;
  color: grey;
  margin: 1rem auto 2rem auto;
  @media ${device.tablet} {
    width: 95%;
  }
`;

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <StyledSection>
          <StyledTitle>{post.title}</StyledTitle>
          <StyledTime>{post.date}</StyledTime>
          <StyledArticle
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          ></StyledArticle>
          <PostTags tags={post.tags} />
          <SocialLinks postPath={slug} postNode={postNode} />
          <UserInfo config={config} />
        </StyledSection>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
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
