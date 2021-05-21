import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

class Landing extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout landing>
        <Helmet title={config.siteTitle} description={config.siteDescription} />
        <SEO />
        <PostListing landing postEdges={postEdges} />
      </Layout>
    );
  }
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQueryl {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 300, format: PLAIN)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
