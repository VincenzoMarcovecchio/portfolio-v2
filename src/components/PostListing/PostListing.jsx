import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles/Global';
const PostListStyled = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    width: 95%;
  }
`;
const StyledTag = styled.small`
  padding: 0.3rem;
  background-color: whitesmoke;
  margin-left: 0.4rem;
  border-radius: 0.2rem;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: small;
  }
`;
const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.5rem;
  margin-top: 2rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);

  .header__article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <PostListStyled>
        {
          /* Your post list here. */
          postList.map((post) => (
            <StyledArticle>
              <div className="header__article">
                <Link to={post.path} key={post.title}>
                  <h1>{post.title}</h1>
                </Link>
                <StyledTag>
                  {post.tags.map((tag) => {
                    return (
                      <Link replace to={`/tags/${tag}`}>
                        {tag}
                      </Link>
                    );
                  })}
                </StyledTag>
              </div>
              <p>{post.excerpt}</p>
            </StyledArticle>
          ))
        }
      </PostListStyled>
    );
  }
}

export default PostListing;
