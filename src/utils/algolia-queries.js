const indexName = `Pages`;

const pageQuery = `{
 pages: allMarkdownRemark {
      edges {
        node {
          excerpt

           frontmatter {
            title
            tags
            slug
          }

          fields {
              slug
          }
        }
      }
    }
  }
`;

function pageToAlgoliaRecord({ node: { excerpt, frontmatter } }) {
  return {
    objectID: Math.random(),
    title: frontmatter.title,
    tags: frontmatter.tags,
    slug: frontmatter.slug,
    excerpt: excerpt,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:150`] },
  },
];

module.exports = queries;
