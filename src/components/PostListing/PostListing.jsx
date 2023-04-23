import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles/Global';
import video from '../../assets/wetcode.gif';
import Search from '../search/index';
import Img from "gatsby-image";
import { useLocation } from '@reach/router';

const StyledPicture = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100vw;
  height: 60vh;
  object-fit: cover;
  
`;

const PostListStyled = styled.section`
  width: 61%;
  margin: auto;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${device.tablet} {
    width: 95%;
  }
  .blog-header {
    display: flex;
    justify-content: space-between;
    align-items: bottom;
    width: 100%;
    position: relative;
    @media ${device.tablet} {
      flex-direction: column;
    }
  }
  h1 {
    width: 100%;
    margin: 2rem auto 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2.5rem;
    @media ${device.mobileM} {
      font-size: 1.9rem;
    }
  }
  a {
    text-decoration:none;
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
    color: chocolate !important;
  }
`;
const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  max-width: min-content;
  padding: 1rem;
  margin: 1rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  position: relative;
  
  @media ${device.mobileM} {
    margin:auto;
    
  }

  :hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
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
    margin:auto;
    @media ${device.tablet} {
      margin-top: 0.7rem;
      margin-bottom: 0.3rem;
      flex-direction:column;
    

    }
  }

  a {
    text-decoration: none;
    color: black;
    width:300px;
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.4;
    @media ${device.mobileM} {
      font-size: 1rem;
    }
  }
  h2 {
    width: 100%;
    display: block;
    float:left;
    margin-bottom: 0;
    font-size: 1.35rem;
    width:250px;
    @media ${device.mobileM} {
      font-size: 1.4rem;
      margin-bottom: - 0.5rem;
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
  tag = this.props.tag;


  render() {
    const postList = this.getPostList();
    
    postList.sort((a,b)=> a.date > b.date)

    const searchIndices = [{ name: `Pages`, title: `Pages` }];
    const location = useLocation();
    const imageOnError = (event) => {
    return  event.currentTarget.style.cssText = "display:none !important";
    };

    return (
      <>
        <br />
        <br />


        <PostListStyled>
          {location.pathname == '/' &&

            <div style={{ alignSelf: "end" }}>
              <div>
                <h1>
                  CHECK OUT MY MOST RECENT POST
                </h1>
              </div>
              <div style={{ maxWidth: "350px", display: "flex", flexWrap: "wrap", justifyContent: "end", marginLeft: "auto" }}>
                {
                  [...new Set(postList)].map((post, index) => (
                    <>
                      <span style={{ padding: "0.5rem",textDecoration:"none !important",  color:"#333", borderRadius: "100vmax", border: "1px solid #404752", margin: "0.5rem 0.5rem 0.5rem 0" }}>
                        <Link style={{ textDecoration:"none !important", color:"#333" }} key={index} replace to={`/tags/${post.tags[0]}`}>#{post.tags[0]}</Link>
                        </span>
                    </>
                    )
                    )
                    }
              </div>
            </div>

          }

          <div className="blog-header">
            <h1>{this.tag ? this.tag : 'Blog'}&nbsp;📝 </h1>

            <Search indices={searchIndices} />&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
              postList.map((post, index) => (
                <StyledArticle key={index}>
                  <div className="header__article">
                    <img style={{ display: "block" }}
                      height="250"
                      width="310"
                      onError={imageOnError}
                      src={`/image/${post.cover}`}
                      alt={post.title} />
                    <div style={{ display: "flex", flexDirection: "column", padding:"1rem" }}>
                      <Link to={post.path} key={post.title}> 
                        <h2>{post.title}</h2>&nbsp;&nbsp;&nbsp;<small style={{color:"#333"}}>Time to read: {post.timeToRead} {post.timeToRead > 1 ? 'minutes' : 'minute'} </small>
                      </Link>
                      <p>{post.excerpt.substring(0, 100) + "..."}</p>
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
                    </div>
                  </div>

                </StyledArticle>
              ))
            }
          </div>
        </PostListStyled>

      </>
    );
  }
}

export default PostListing;
