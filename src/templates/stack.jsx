import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

class Stack extends React.Component {
  
  render() {

    let {pro} = this.props

    let {pageContext} = this.props


    console.log(pro,pageContext)

    return (
      <>

  <section>

  <h3>{pageContext.pro.title}</h3>
  {pageContext.pro.body_markdown}

  </section>

   </>
    );
  }
}

export default Stack;
