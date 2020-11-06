import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../styles/Global';
const StyledUserLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  @media ${device.tablet} {
    justify-content: space-between;
  }
`;
const StyledLink = styled.a`
  background-color: whitesmoke;
  margin-right: 0.5rem;
  border-radius: 0.3rem;
`;
class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map((link) => (
      <StyledLink key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </StyledLink>
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
        <StyledLink href={this.props.rss}>Rss</StyledLink>
      </StyledUserLinks>
    );
  }
}

export default UserLinks;
