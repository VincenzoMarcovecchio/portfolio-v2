import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles/Global';
import video from '../../assets/video.mp4';

const StyledVideo = styled.video`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  position: relative;
`;

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

  h1 {
    width: 100%;
    margin: 4rem auto 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2rem;
    @media ${device.mobileM} {
      font-size: 1.5rem;
    }
  }
`;
const StyledTag = styled.small`
  padding: 0.3rem;
  border-radius: 0.2rem;
  text-transform: uppercase;
  width: fit-content;

  @media ${device.tablet} {
    font-size: small;
  }
  a {
    color: lightseagreen !important;
  }
`;
const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem 1rem 1.5rem;
  margin-top: 2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0.5rem;
    width: 100%;
    background: lightseagreen;
  }
  .header__article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -0.5rem;
    @media ${device.mobileM} {
      margin-bottom: 0.5rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.5;
    @media ${device.mobileM} {
      font-size: 1rem;
    }
  }
  h2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.6rem;
    @media ${device.mobileM} {
      font-size: 1.3rem;
    }
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
      <>
        <StyledVideo src={video} aria-title="Vin's blog" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
        </StyledVideo>

        <PostListStyled>
          <h1>The latest from the blog</h1>
          {
            /* Your post list here. */
            postList.map((post, index) => (
              <StyledArticle key={index}>
                <div className="header__article">
                  <Link to={post.path} key={post.title}>
                    <h2>{post.title}</h2>
                  </Link>
                </div>
                <p>{post.excerpt}</p>
                <StyledTag>
                  {post.tags.map((tag, i) => {
                    let tagga = tag.replace(/\s/g, '-');
                    return (
                      <Link key={i} replace to={`/tags/${tagga}`}>
                        #{tag}&nbsp;&nbsp;
                      </Link>
                    );
                  })}
                </StyledTag>
              </StyledArticle>
            ))
          }
        </PostListStyled>
      </>
    );
  }
}

export default PostListing;
