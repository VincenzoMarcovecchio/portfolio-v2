import React, { Component } from "react";
import { Helmet } from "react-helmet";

class OsintPage extends Component {
  render() {
    return (
      <>
  
        <Helmet
          title={`Osint Tools | Find out who the scammer is`}
          description="OSINT tools"
        ></Helmet>
        <iframe src="https://osintframework.com/" />
      </>
    );
  }
}

export default OsintPage;
