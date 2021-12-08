import React from "react";

export default class singleProgram extends React.Component {
  render() {
    return (
      <>
        <h1>hello{this.props.pageContext.id}</h1>
      </>
    );
  }
}
