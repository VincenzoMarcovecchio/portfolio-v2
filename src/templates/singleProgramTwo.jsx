import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { StyledArticle } from "./singleProgram";
import { StyledSection } from "./singleProgram";
import SocialLinks from "../components/SocialLinks/SocialLinks";

import { StyledTitle } from "./singleProgram";

const singleProgramTwo = ({ pageContext }) => {
  return (
    <>
      <Helmet>
        <title>{`You are hacking on: ${pageContext.pro.name}`}</title>
        <meta
          property="og:url"
          content={`https://vincenzo.codes/${pageContext.pro.name.toLowerCase()}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageContext.pro.name} />
        <meta property="og:description" content="What are you hacking on" />
      </Helmet>
      <StyledSection>
        <StyledTitle>{pageContext.pro.name}</StyledTitle>

        <StyledArticle>
          <h2>In scope:</h2>
          {pageContext.pro.targets.in_scope.map((co) => {
            return (
              <>
                <li>{co.asset_identifier}</li>
                <li>{co.asset_type}</li>
                <li>{co.availability_requirement}</li>
                <li>{co.confidentiality_requirement}</li>
                <li>{co.eligible_for_bounty.toString() || ""}</li>

                <li>{co.eligible_for_submission.toString()}</li>
                <li>{co.instruction}</li>
                <li>{co.integrity_requirement}</li>
                <li>{co.max_severity}</li>
              </>
            );
          })}
        </StyledArticle>
    

        <br />
        <br />
        <br />
      </StyledSection>
    </>
  );
};

export default singleProgramTwo;
