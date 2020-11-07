import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../layout';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import ReactTypingEffect from 'react-typing-effect';
const ReactTypingEffecto = () => {
  return (
    <>
      <ReactTypingEffect
        eraseDelay="2000"
        text={['I run.', 'I code', 'I eat', 'I repeat']}
      />
    </>
  );
};
class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
