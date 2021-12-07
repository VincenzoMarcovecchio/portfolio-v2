import React from "react";

export default class singleProgram extends React.Component {
 
  render() {
    const { pro } = this.props.pageContext;
    console.log(pro);

    return (
      <>
        <h1>hello</h1>
      </>
    );
  }
}
