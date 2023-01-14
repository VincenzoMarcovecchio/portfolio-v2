import React from 'react';
import { Helmet } from "react-helmet";

function seo() {



  return (
    <>
      <Helmet>
        <script src="/seo.js" type="text/javascript" />
      </Helmet>

      <div id="body">
        <input type="text" />
      </div>
    </>
  );

};

export default seo;
