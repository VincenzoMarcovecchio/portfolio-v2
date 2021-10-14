import React from "react";
import { graphql } from "gatsby";
// import InfiniteScroll from "react-infinite-scroll-component"
import * as JsSearch from "js-search";
import styled from "styled-components";
import { Helmet } from 'react-helmet';


const StyledTable = styled.table`

  width: 100%
  borderCollapse: collapse
  borderRadius: 4px
  border: 1px solid #d3d3d3


  thead {
  border: 1px solid #808080;

  th {
    textAlign: left;
    padding: 5px;
    fontSize: 14px;
    fontWeight: 600;
    borderBottom: 2px solid #d3d3d3;
    cursor: pointer;
  }


  }


`;

const StyledSection = styled.section`
  margin: auto;
`;

const StyledDiv = styled.section`
  margin: 0 auto;
  padding: 0.5rem;
`;
class Blogg extends React.Component {
  state = {
    bookList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  };
  /**
   * React lifecycle method to fetch the data
   */

  async componentDidMount() {
    try {
      await this.setState({ bookList: this.props.data.bugs.programs });
      await this.rebuildIndex();
    } catch {
      this.setState({ isError: true });
      console.log("====================================");
      console.log(`Something bad happened while fetching the data`);
      console.log("====================================");
    }
  }
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { bookList } = this.state;
    const dataToSearch = new JsSearch.Search(`name`);
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(`name`);
    dataToSearch.addIndex(`bounty`); // sets the index attribute for the data
    dataToSearch.addIndex(`url`); // sets the index attribute for the data
    dataToSearch.addDocuments(bookList); // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false });
  };
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = (e) => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value);
    this.setState({ searchQuery: e.target.value, searchResults: queryResult });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { isError, isLoading, bookList, searchResults, searchQuery } =
      this.state;
    const queryResults = searchQuery === `` ? bookList : searchResults;

    if (isLoading) {
      return (
        <>
         <Helmet
          title="Public Bug Bounty Programs"
          description="Community curated list of public bug bounty and responsible disclosure programs."
        />
        
          <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
            <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
              Getting the search all setup
            </h1>
          </div>
        </>
      );
    }
    if (isError) {
      return (
        <>
          <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
            <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
              Ohh no!!!!!
            </h1>
            <h3
              style={{
                marginTop: `2em`,
                padding: `2em 0em`,
                textAlign: `center`,
              }}
            >
              Something really bad happened
            </h3>
          </div>
        </>
      );
    }
    return (
      <>
      <Helmet
          title="Public Bug Bounty Programs"
          description="Community curated list of public bug bounty and responsible disclosure programs."
        />

        <StyledSection>
          <h2 align="center">
            This is a source of public programs listed on{" "}
            <a
              href="https://chaos.projectdiscovery.io"
              target="_blank"
              rel="canonical noopener noreferrer"
            >
              chaos.projectdiscovery.io
            </a>
            &nbsp;Please send pull-request of public bug bounty programs that
            you want to include in the public list with recon data.
          </h2>
          <StyledDiv>
            <form onSubmit={this.handleSubmit}>
              <div style={{ margin: "0.5rem auto" }}>
                <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                  Enter your search here
                </label>
                <input
                  id="Search"
                  value={searchQuery}
                  onChange={this.searchData}
                  placeholder="Enter your search here"
                  style={{ margin: "0 auto", width: "400px" }}
                />
              </div>
            </form>
            <div>
              Number of items:
              {queryResults.length}
              <StyledTable>
                <thead>
                  <tr>
                    <th>Name 📇</th>
                    <th>Bounty 🤑</th>
                    <th>Domains 💻</th>
                  </tr>
                </thead>
                <tbody>
                  {queryResults.map((item) => {
                    return (
                      <tr key={`row_${item.name}`}>
                        <td
                          style={{
                            fontSize: "14px",
                            border: "1px solid #d3d3d3",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            fontSize: "14px",
                            border: "1px solid #d3d3d3",
                          }}
                        >
                          {item.bounty.toString()}
                        </td>
                        <td
                          style={{
                            fontSize: "14px",
                            border: "1px solid #d3d3d3",
                          }}
                        >
                          {item.domains.map((ite) => (
                            <div>{ite}</div>
                          ))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </StyledTable>
            </div>
          </StyledDiv>
        </StyledSection>
      </>
    );
  }
}

export default Blogg;

export const pageQuery = graphql`
  query MyQueryyz {
    bugs {
      programs {
        bounty
        domains
        name
        swag
        url
      }
    }
  }
`;
