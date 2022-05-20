import React from "react";
import ClientSearch from "../components/ClientSearch";
const SearchTemplate = (props) => {
  const { pageContext } = props;
  const { bugsData } = pageContext;
  const { allBugs, options } = bugsData;
  return (
    <div>
      <section className="wrapper">

        <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
          Search data using JS Search using Gatsby API
        </h1>
        <div>
          <ClientSearch bugs={allBugs} engine={options} />
        </div>
      </section>
    </div>
  );
};
export default SearchTemplate;
