import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import video from '../assets/video.mp4';
const StyledLayout = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Roboto, Arial,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.75;
  font-size: 1rem;
  background-color: mintcream;
`;
const StyledVideo = styled.video`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  position: relative;
  content: "Vin's Blog";
`;
export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    const { landing } = this.props;
    return (
      <React.Fragment>
        <StyledLayout>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          <Header />

          <StyledVideo src={video} title="Vin's blog" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
          </StyledVideo>
          {children}
        </StyledLayout>
        <Footer config={config} />
      </React.Fragment>
    );
  }
}
