import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../styles/Global';

const StyledPostTags = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    width: 95%;
  }

  a {
    color: #d94b23 !important;
    text-decoration: none;
    padding: 0.3rem;
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
              #{tag}&nbsp;
            </Link>
          ))}
      </StyledPostTags>
    );
  }
}

export default PostTags;
