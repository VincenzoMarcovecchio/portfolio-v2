import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';

class Istqb extends Component {
  render() {
    return (
      <>
        <Helmet
          title={`Istqb esame in Italiano | ${config.siteTitle}`}
          description={config.siteDescription}
        >
<script src="https://raw.githubusercontent.com/WebDevSimplified/JavaScript-Quiz-App/master/script.js"></script>
        </Helmet>
          <div class="container">
    <div id="question-container" class="hide">
      <div id="question">Question</div>
      <div id="answer-buttons" class="btn-grid">
        <button class="btn">Answer 1</button>
        <button class="btn">Answer 2</button>
        <button class="btn">Answer 3</button>
        <button class="btn">Answer 4</button>
      </div>
    </div>
    <div class="controls">
      <button id="start-btn" class="start-btn btn">Start</button>
      <button id="next-btn" class="next-btn btn hide">Next</button>
    </div>
  </div>
      </>
    );
  }
}

export default Istqb;
