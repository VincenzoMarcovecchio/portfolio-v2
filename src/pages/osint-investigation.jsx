import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


class OsintPage extends Component {
  render() {
    return (
      <>
        <Helmet
          title={`OSINT TOOLS | find out who the scammer is`}
          description="OSINT tools"
        />
        <iframe src="https://osintframework.com/"></iframe>
      </>
    );
  }
}

export default OsintPage;