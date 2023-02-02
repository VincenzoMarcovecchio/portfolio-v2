import React, { Component } from "react";
import UserLinks from "../UserLinks/UserLinks";
import styled from "styled-components";
import { device } from "../../styles/Global";
import { Link } from "gatsby";
const FooterStyled = styled.footer`
  justify-content: center;
  align-content: center;
  background-color: black !important;
  color: whitesmoke;
  padding: 5rem 2rem 1rem 2rem;
  width: inherit;
  max-width: 1440px;
  margin: auto;
  @media ${device.tablet} {
    padding: 5rem 1rem 1rem 1rem;
  }
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
 center iframe {
    height:50vh !important;
    overflow:hidden;
    width:100%;
    max-width:100vw;
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
      <>
        <section>
          <center>
        <iframe src="https://vincenzocodes.substack.com/embed" width="480" height="320" style="height:50vh!important;border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
        </center></section>
        <FooterStyled>
          <UserLinks config={config} rss={url} labeled />
          <div className="notice-container">
            <p>{copyright}</p>
            {/* <p>
            Based on &nbsp;
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
          </p> */}
            <p>
              <img
                width="27"
                height="15"
                src="/image/hot2x.gif"
                alt="hot topic"
              />
              <Link to="/upcoming-hacking-events-worldwide">Hacking events</Link>
            </p>
          </div>
        </FooterStyled>
      </>
    );
  }
}

export default Footer;
