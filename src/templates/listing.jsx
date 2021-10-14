import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import styled from 'styled-components';



const StyledPagination = styled.div`
  margin: 5rem auto 2rem auto;
  width: inherit;
  text-align: center;

  a {
    text-decoration: none;
    color: lightseagreen !important;
  }
`;

class Listing extends React.Component {
  renderPaging() {
    const { currentPageNum, pageCount } = this.props.pageContext;
    const prevPage = currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <StyledPagination>
        {!isFirstPage && (
          <Link rel="prev" to={prevPage}>
            Previous&nbsp;
          </Link>
        )}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? '/' : `/${pageNum}/`}
            >
              {pageNum}&nbsp;
            </Link>
          );
        })}
        {!isLastPage && (
          <Link rel="next" to={nextPage}>
            Next&nbsp;
          </Link>
        )}
      </StyledPagination>
    );
  }

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <>
        <Helmet title={config.siteTitle} description={config.siteDescription} />
        <SEO />
        <StyledPostList>
          <PostListing postEdges={postEdges} />
          {this.renderPaging()}
        </StyledPostList>
      </>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQueryl2($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
