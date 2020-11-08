import React, { Component } from 'react';
import { Link } from 'gatsby';
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    background-color: black !important;
    @media ${device.tablet} {
      margin-top: 2rem;
      height: 3rem;
      flex-direction: column-reverse;
    }
    a {
      background-color: black;
      color: whitesmoke;
      padding:0;
    }
  }

  @media (max-width: 640px - 1px) {
    .notice-container {
      justify-content: space-around;
    }
  }

  .notice-container h4 {
    text-align: center;
    margin: 0;
  }

  a {
    text-decoration: none;
    padding: 0.3rem;
    color: black;
    background-color: whitesmoke;
  }

  small {
    color: black;
    background-color: whitesmoke;
    height: fit-content;
    padding: unset;
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
          <h4>{copyright}</h4>
          <h4>
            Based on &nbsp;
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
          </h4>
        </div>
      </FooterStyled>
    );
  }
}

export default Footer;
