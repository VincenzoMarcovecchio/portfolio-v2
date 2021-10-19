import React, { Component } from "react";
import { Helmet } from "react-helmet";

class OsintPage extends Component {
  render() {
    return (
      <>
        <style>
          {`
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
        >
         
          <script type="text/javascript" src="/d3.v3.min.js"></script>
          <script src="/arf.js"></script>
        </Helmet>
        <body>
          <div id="body">
            <div id="header">OSINT Framework</div>
          </div>
        </body>
      </>
    );
  }
}

export default OsintPage;
