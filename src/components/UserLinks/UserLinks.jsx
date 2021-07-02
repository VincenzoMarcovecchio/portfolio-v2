import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../styles/Global';

const StyledUserLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: unset;
  max-width: 24rem;
  width: 100%;
}
  @media ${device.tablet} {
    justify-content: space-between;
    height: 7rem;
  }
`;
const StyledLink = styled.a`
  background-color: whitesmoke;
  margin: auto auto auto 0;
  border-radius: 0.3rem;
`;

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map((link) => (
      <>
      <StyledLink
        target="_blank"
        rel="noopener noreferrer canonical"
        key={link.label}
        href={link.url}
      >
        {labeled ? link.label : ''}
      </StyledLink>

        </>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <StyledUserLinks>
        {this.getLinkElements()}
        <StyledLink
          target="_blank"
          rel="noopener noreferrer canonical"
          href={this.props.rss}
        >
          Rss
        </StyledLink>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer canonical"

          href="https://codepen.io/Vinny92"
        >
         codepen
        </StyledLink>
      </StyledUserLinks>
    );
  }
}

export default UserLinks;
