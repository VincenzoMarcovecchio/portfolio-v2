import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles/Global';
import video from '../../assets/wetcode.gif';
import Search from '../search/index';

const StyledPicture = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100vw;
  height: 60vh;
  object-fit: cover;
  
`;

const PostListStyled = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
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
    margin: 4rem auto 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2.5rem;
    @media ${device.mobileM} {
      font-size: 1.9rem;
    }
  }

  
.container-gears{
  width: 443px;
  height: 457px;
  margin-left: -162px;
  position: fixed;
  top: 15vh;
  right: -2vw;
}

.container-gears .gear2{
  background: url('https://i.imgur.com/BjgGPow.png') no-repeat;
  width: 328px;
  height: 328px;
  margin-top: 73px;
  float: left;
}

.container-gears .gear3{
  background: url('https://i.imgur.com/BjgGPow.png') no-repeat;
  width: 153px;
  height: 161px;
  position: absolute;
  margin-top: 300px;
  margin-left: 280px;
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
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin-top: 2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  position: relative;

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
    @media ${device.mobileM} {
      margin-top: 0.7rem;
      margin-bottom: 0.3rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 0;
    font-size: 1.6rem;
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
    const searchIndices = [{ name: `Pages`, title: `Pages` }];


   // var $gear1 = typeof document !== `undefined` && document.querySelector('.gear1');
    var gear2 = typeof document !== `undefined` && document.querySelector('.gear2');
    var gear3 = typeof document !== `undefined` && document.querySelector('.gear3');
    var $body = typeof document !== `undefined` && document.querySelector('body');
    var body = typeof document !== `undefined` && document.body;
    var html = typeof document !== `undefined` && document.documentElement;

    var bodyHeight = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    function getScrollTop() {
      if (typeof window !== `undefined`) {

        if (typeof window.pageYOffset != `undefined`) {
          //most browsers except IE before #9
          return window.pageYOffset;
        } else {
          var B = document.body; //IE 'quirks'
          var D = document.documentElement; //IE with doctype
          D = (D.clientHeight) ? D : B;
          return D.scrollTop;
        }

      }
    }

    typeof window !== `undefined` && gear2.length && gear3.length && window.addEventListener('scroll', function () {

      var scroll = getScrollTop();

   
      gear2.style.css = `
        'transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-moz-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-ms-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-o-transform:rotate': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)'
      `;

      gear3.style.css = `
        'transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-moz-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-ms-transform': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)',
        '-o-transform:rotate': 'rotate(' + (scroll / bodyHeight * ("-1000")) + 'deg)'
      `;
      
    });

    return (
      <>
        <picture>
          <source srcset={video} type="image/webp" />
          <source srcset={video} type="image/jpeg" />
          <StyledPicture src={video} alt="wet code" />
        </picture>


        <PostListStyled>

          <div class="container-gears">
            <div class="gear2"></div>
            <div class="gear3"></div>
          </div>


          <div className="blog-header">
            <h1>{this.tag ? this.tag : 'Blog'}&nbsp;📝</h1>

            <Search indices={searchIndices} />
          </div>
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
