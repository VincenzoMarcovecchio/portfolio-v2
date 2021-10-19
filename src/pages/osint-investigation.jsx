import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


class OsintPage extends Component {
  render() {
    return (
      <>
      <style>{`
      body {
  background-color: #ffffff;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica;
}

#body {
  margin: 0 auto;
  position: relative;
}

#header {
  font-size: 40px;
  font-weight: bold;
  top: 20px;
  text-align: center;
}

.legend {
  position: absolute;
  top: 0px;
  right: 0;
  width: 330px;
  font-size: 11px;
  color: #000;
}

.node {
  cursor: pointer;
}

.node circle {
  cursor: pointer;
  fill: #fff;
  stroke: steelblue;
  stroke-width: 1.5px;
}

.node text {
  font-size: 12px;
  fill: rgb(0, 0, 0);
}

path.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 1px;
}`}
      </style>
        <Helmet
          title={`Osint Tools | Find out who the scammer is`}
          description="OSINT tools"
        />
        <body>
    <div id="body">
      <div id="header">
        OSINT Framework
    
      </div>
    </div>

    <script src="js/arf.js"></script>

    <div className="legend">(T) - Indicates a link to a tool that must be installed and run locally<br>
    (D) - Google Dork, for more information: <a href="https://en.wikipedia.org/wiki/Google_hacking">Google Hacking</a><br>
    (R) - Requires registration</br>
    (M) - Indicates a URL that contains the search term and the URL itself must be edited manually<br></p></div>

    <h3>Notes</h3>
    OSINT framework focused on gathering information from free tools or resources.  The intention is to help people find free OSINT resources.  Some of the sites included might require registration or offer more data for $$$, but you should be able to get at least a portion of the available information for no cost.<br>

    <p>I originally created this framework with an information security point of view.  Since then, the response from other fields and disciplines has been incredible.  I would love to be able to include any other OSINT resources, especially from fields outside of infosec.  Please let me know about anything that might be missing!</p>

    <h3>For Update Notifications</h3>
    Follow me on Twitter: <a href="https://twitter.com/jnordine">@jnordine</a></br>
    Watch or star the project on Github: <a href="https://github.com/lockfale/osint-framework">https://github.com/lockfale/osint-framework</a>

    <h3>Suggestions, Comments, Feedback</h3>
    Feedback or new tool suggestions are extremely welcome!  Please feel free to reach out on Twitter or submit an issue on Github.

  </body>
      </>
    );
  }
}

export default OsintPage;