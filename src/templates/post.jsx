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

const StyledArticle = styled.article`
  padding: 3rem 1.5rem;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  background-color: white;
  width: 80%;
  margin: 1rem auto;
  h2 {
    margin: 1rem auto;
  }
  p {
    margin-bottom: 1rem;
  }
  ul {
    margin-bottom: 1rem;
    width: 95%;
    margin: auto;
  }
`;
const StyledSection = styled.section`
  padding: 2rem 0;
`;
const StyledTitle = styled.h1`
  font-size: 2rem;
  margin: 0rem auto 2rem 10%;
`;
const StyledTime = styled.time`
  font-size: 0.9rem;
  width: 100%;
  text-align: left;
  margin: 0 10% 0 10%;
  color: grey;
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
