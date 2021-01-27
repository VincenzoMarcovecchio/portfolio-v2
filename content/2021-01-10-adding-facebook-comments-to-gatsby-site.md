---
title: 'Add Facebook comments to GatsbyJs site'
cover: 'responsive-navbar-using-gatsby-and-styled-components.jpg'
date: '2021-01-10'
category: 'cheatsheet'
slug: 'adding-facebook-comments-to-gatsbyjs-site'

tags:
  - gatsby
  - facebook
  - comments
---

To include fb comments in your Gatsby site head over to https://developers.facebook.com/docs/plugins/comments/ and create a new comments support for your app, you will be given the Javascript SDK

```jsx
<script
  async
  defer
  crossorigin="anonymous"
  src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0&appId=167048748417291&autoLogAppEvents=1"
  nonce="HQQYs0yA"
></script>
```

and the div that will render your comments

```jsx
<div id="fb-root"></div>
<div
  class="fb-comments"
  data-href="https://www.yoursite.com/*"
  data-width="100%"
  data-numposts="5"
></div>
```

!UPDATE! I ALSO SUGGEST TO PASTE ALL THE CODE IN THE ARTICLE COMPONENT AND THAT'S IT OR...

In your `gatsby-ssr.js` make use of the <a href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody" ref="canonical noopener noreferrer">onRenderBody</a> function and paste the following code

```jsx
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div id="fb-root"></div>,
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&autoLogAppEvents=1&version=v9.0&appId=*you app id*"
      nonce="rlVIHZ6h"
    ></script>,
  ]);
};
```

then you will render the comments in your article or wherever you want with the last bit of code given from facebook

```jsx
<div
  class="fb-comments"
  data-href="https://yourwebsite.com/blog/*"
  data-width="100%"
  data-numposts="5"
></div>
```

The comments will now be accessible. If you want the comments to load faster you might want to have a look at this Stack overflow answer <a href="https://stackoverflow.com/questions/43019710/facebook-comments-loads-very-slow" rel="canonical noopener noreferrer">here</a>. Cheers
