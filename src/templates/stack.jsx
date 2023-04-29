import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

class Stack extends React.Component {
  
  render() {

    console.log(this.props)
    let title = this.props.pageContext.pro.title
    let body = this.props.pageContext.pro.body_markdown
    
    return (
      <>

  <section>

  <h3>{title}</h3>
  {body}

  </section>

   </>
    );
  }
}

export default Stack;
