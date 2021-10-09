import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { device } from "../styles/Global";
import { Helmet } from "react-helmet";

const StyledTable = styled.table`
  width: 80%;
  margin: auto;

  padding: 0.3rem;
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  @media ${device.tablet} {
    width: 95%;
  }
`;

const StyledTableRow = styled.tr`
  display: flex;
  flex-direction: column;
  border: 1px solid #57b3ab;
  padding: 0.4rem 0.4rem 0 0.4rem;
  margin-bottom: 0.6rem;
`;
const StyledTableData = styled.td`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Queryo = graphql`
  query twou {
    allEventi {
      nodes {
        name
        city
        cfp_details
        twitter
        website
        country
        conf_start_date
      }
    }
  }
`;
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BasicTable = ({ data }) => {
  

  const renderHeader = React.useCallback(() => {
    let headerElements = ["Name", "City", "Description"];
    return headerElements.map((el, index) => {
      return <th key={index}>{el.toUpperCase()}</th>;
    });
  }, []);

  const renderBody = () => {
    const Body = React.useMemo(
      () =>
        data.allEventi.nodes.map(
          (
            { website, name, country, city, cfp_details, conf_start_date },
            i
          ) => {
            return (
              <>
                <StyledTableRow key={i}>
                  <div>
                    <StyledTableData>
                      <strong>Name:&nbsp;</strong>
                      {name}
                    </StyledTableData>
                    <StyledTableData>
                      <strong>City:&nbsp;</strong>
                      {city}&nbsp;{getFlagEmoji(country)}
                    </StyledTableData>
                    <StyledTableData>
                      <strong>Start Date:&nbsp;</strong>

                      <time datetime={conf_start_date}> {conf_start_date}</time>
                    </StyledTableData>
                    <StyledTableData>
                      <strong>Website:&nbsp;</strong>
                      <a
                        target="_blank"
                        rel="canonical noopener noreferrer"
                        href={website}
                      >
                        {website}
                      </a>
                    </StyledTableData>
                  </div>
                  <StyledTableData>
                    <strong>Details:&nbsp;</strong>
                    {cfp_details}
                  </StyledTableData>
                </StyledTableRow>
              </>
            );
          }
        ),
      []
    );

    return <>{Body}</>;
  };

  return (
    <>
      <Helmet
        title={`Vincenzo's | List of hacking events`}
        description={"A list of hacking events worldwide spread"}
      ></Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          📅 List of (upcoming) hacking events 🌎
        </h1>
        <p>
          List is kept updated and mantained here:{" "}
          <a
            href="https://api.cfptime.org/api/docs"
            target="_blank"
            rel="canonical noopener noreferrer"
          >
            https://api.cfptime.org/api/docs
          </a>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h4>
          Please use <code>Ctrl + g</code> to search for events
        </h4>
      </div>
      <StyledTable>
        <tbody>{renderBody()}</tbody>
      </StyledTable>
    </>
  );
};
export default BasicTable;
