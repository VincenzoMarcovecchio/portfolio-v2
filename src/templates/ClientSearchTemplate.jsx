import React from "react";
import ClientSearch from "../components/ClientSearch";
import { StyledDiv } from "../pages/projects";
const SearchTemplate = (props) => {
  const { pageContext } = props;
  const { bugsData } = pageContext;
  const { allBugs, options } = bugsData;


  return (

    <StyledDiv>
      <section className="wrapper">
        <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
          Search data using JS Search using Gatsby API
        </h1>
        <div>
          <ClientSearch bugs={allBugs} engine={options} />
        </div>
      </section>
    </StyledDiv>

  );
};
export default SearchTemplate;
