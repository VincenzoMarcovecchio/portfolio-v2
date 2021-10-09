import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/About/About';
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  render() {
    return (
      <>
        <Helmet
          title={`About | ${config.siteTitle}`}
          description={config.siteDescription}
        />
        <About />
      </>
    );
  }
}

export default AboutPage;
