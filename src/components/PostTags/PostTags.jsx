import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import styled from 'styled-components';
const StyledPostTags = styled.div`
  width: 85%;
  margin: 2rem auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  a {
    background-color: white;
    margin-right: 1rem;
    text-decoration: none;
    color: black;
    padding: 0 0.3rem;
    border-radius: 0.3rem;
    border: 1px solid black;
  }
`;
class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <StyledPostTags>
        {tags &&
          tags.map((tag) => (
            <Link
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
      </StyledPostTags>
    );
  }
}

export default PostTags;
