import React from "react";
import ClientSearch from "../components/ClientSearch";
import { StyledSection } from "./pos";
const SearchTemplate = (props) => {
  const { pageContext } = props;
  const { bugsData } = pageContext;
  const { allBugs, options } = bugsData;


  return (
   
      <StyledSection>

        <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
          Search data using JS Search using Gatsby API
        </h1>
        <div>
          <ClientSearch bugs={allBugs} engine={options} />
        </div>
        </StyledSection>
 
  );
};
export default SearchTemplate;
