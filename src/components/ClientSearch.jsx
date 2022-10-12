import React, { Component } from "react";
import * as JsSearch from "js-search";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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

class ClientSearch extends Component {
  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByTitle: false,
    indexByAuthor: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: "",
    selectedStrategy: "",
    selectedSanitizer: "",
  };
  /**
   * React lifecycle method that will inject the data into the state.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps;
      return {
        indexByTitle: engine.TitleIndex,
        indexByAuthor: engine.AuthorIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      };
    }
    return null;
  }
  async componentDidMount() {
    this.rebuildIndex();
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const {
      selectedStrategy,
      selectedSanitizer,
      removeStopWords,
      termFrequency,
      indexByTitle,
      indexByAuthor,
    } = this.state;
    const { bugs } = this.props;

    const dataToSearch = new JsSearch.Search("name");

    if (removeStopWords) {
      dataToSearch.tokenizer = new JsSearch.StopWordsTokenizer(
        dataToSearch.tokenizer
      );
    }
    /**
     * defines an indexing strategy for the data
     * read more about it here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    if (selectedStrategy === "All") {
      dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    }
    if (selectedStrategy === "Exact match") {
      dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy();
    }
    if (selectedStrategy === "Prefix match") {
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    }

    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     */
    selectedSanitizer === "Case Sensitive"
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer());
    termFrequency === true
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("name"))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex());

    // sets the index attribute for the data
    if (indexByTitle) {
      dataToSearch.addIndex("name");
    }
    // sets the index attribute for the data
    if (indexByAuthor) {
      dataToSearch.addIndex("bounty");
    }

    dataToSearch.addDocuments(bugs); // adds the data to be searched

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
    const { searchResults, searchQuery } = this.state;
    const { bugs } = this.props;
    const queryResults = searchQuery === "" ? bugs : searchResults;
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
              <div style={{ margin: "0 auto" }}>
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
                <thead style={{ border: "1px solid #808080" }}>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "5px",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderBottom: "2px solid #d3d3d3",
                        cursor: "pointer",
                      }}
                    >
                      Name
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "5px",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderBottom: "2px solid #d3d3d3",
                        cursor: "pointer",
                      }}
                    >
                      Bounty
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "5px",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderBottom: "2px solid #d3d3d3",
                        cursor: "pointer",
                      }}
                    >
                      Domains
                    </th>
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
                            <div><a href={ite} target="_blank">{ite}</a></div>
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
export default ClientSearch;
