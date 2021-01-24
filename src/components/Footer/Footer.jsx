import React, { Component } from 'react';
import UserLinks from '../UserLinks/UserLinks';
import styled from 'styled-components';
import { device } from '../../styles/Global';
const FooterStyled = styled.footer`
  justify-content: center;
  align-content: center;
  background-color: black !important;
  color: whitesmoke;
  padding: 5rem 2rem 1rem 2rem;
  width: inherit;
  max-width: 1440px;
  margin: auto;

  .notice-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    background-color: black !important;
    @media ${device.tablet} {
      width: inherit;
      margin-top: 2rem;
      height: fit-content;
      flex-direction: column-reverse;
    }
    a {
      background-color: black;
      color: whitesmoke;
      padding: 0;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 640px - 1px) {
    .notice-container {
      justify-content: space-around;
    }
  }

  .notice-container p:first-child {
    text-align: center;
    margin: 0;
    @media ${device.tablet} {
      margin-bottom: 0rem;
    }
  }

  a {
    text-decoration: none;
    padding: 0.3rem;
    color: white;
    background-color: darkslategray;
  }
`;

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <FooterStyled>
        <UserLinks config={config} rss={url} labeled />
        <div className="notice-container">
          <p>{copyright}</p>
          <p>
            Based on &nbsp;
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
          </p>
        </div>
      </FooterStyled>
    );
  }
}

export default Footer;
