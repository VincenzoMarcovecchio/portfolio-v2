import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styled from 'styled-components';

const StyledLayout = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 0 3rem 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Roboto, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.75;
  font-size: 1rem;
  background-color: mintcream;
`;

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <StyledLayout>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
            <link rel="stylesheet" href="./reset.css" />
          </Helmet>
          <Header />

          {children}
        </StyledLayout>
        <Footer config={config} />
      </React.Fragment>
    );
  }
}
