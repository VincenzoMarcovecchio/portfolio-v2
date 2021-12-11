import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { device } from "../styles/Global";

export const StyledArticle = styled.article`
  padding: 3rem 1.5rem;
  box-sizing: border-box;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: white;
  width: 80%;
  margin: 1rem auto;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  border-top: 0.8rem solid lightseagreen;

  .language-text {
    padding: 0 0.5rem;
  }
  pre {
    padding: 1.8rem 0.5rem !important;
  }

  @media ${device.tablet} {
    width: 98%;
    overflow: hidden;
    padding: 1rem 0.7rem;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: 18px;

    & img {
      width: 100%;
    }
  }
  ul {
    padding-left: 1.1rem;
    & li {
      margin-bottom: 1rem;
    }
  }
`;

export const StyledSection = styled.section`
  padding: 2rem 0;
  position: relative;
  .gatsby-image-wrapper {
    width: 80%;
    display: flex !important;
    justify-self: center;
    align-self: center;
    margin: auto;
    min-height: 78vh;

    @media ${device.tablet} {
      width: 95%;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2.3rem;
  line-height: 1.3;
  width: 80%;
  margin: 4rem auto 2rem auto;
  @media ${device.tablet} {
    width: 95%;
    margin: 0rem auto 1.5rem auto;
  }
`;
const Bottomlinks = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    width: 95%;
  }
  a {
    text-decoration: none;
    color: inherit;
    width: fit-content;
    transition: color 200ms linear;
    @media ${device.tablet} {
      font-size: 0.9rem;
    }
  }
  a:hover {
    color: firebrick;
  }
  div {
    width: 100%;
    align-self: center;
  }
`;
const StyledTime = styled.time`
  display: block;
  font-size: 1.2rem;
  width: 80%;
  color: grey;
  margin: 3rem auto 1.5rem auto;
  @media ${device.tablet} {
    width: 95%;
  }
`;

const singleProgram = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <>
      <Helmet>
        <title>{`${pageContext.pro.name}`}</title>
        <meta
          property="og:url"
          content={`https://vincenzo.codes/${pageContext.pro.id}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageContext.pro.name} />
        <meta property="og:description" content="What are you hacking on" />
      </Helmet>
      <StyledSection>
        <StyledTitle>{pageContext.pro.name}</StyledTitle>

        <StyledArticle>
          <h2 style={{ display: "flex", alignItems: "center" }}>
            Powered by:&nbsp;
            <svg
              class="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 112 36"
              width="166"
              height="53"
            >
              <g data-name="Groupe 235">
                <path
                  data-name="T123"
                  d="M93.61 35.851H17.925a17.925 17.925 0 1 1 0-35.851H93.61a17.925 17.925 0 0 1 0 35.851"
                  fill="#080808"
                ></path>
                <path
                  data-name="T124"
                  d="M48.899 10.486a.714.714 0 0 0-.208.5v9.7l-1.394-4.157a.721.721 0 0 0-.193-.4.735.735 0 0 0-.237-.167.58.58 0 0 0-.12-.036l-.163-.025a.618.618 0 0 0-.185.026l-.131.049-.03.016-.015.008a.738.738 0 0 0-.342.5l-1.384 4.165v-9.666a.715.715 0 0 0-.234-.53.706.706 0 0 0-1.19.526v14.129l.105.318.227.238.377.105a.714.714 0 0 0 .219-.035l.315-.2 2.271-6.671 2.152 6.445.036.076a.639.639 0 0 0 .1.144l.333.205.144.042.064-.008a.79.79 0 0 0 .211-.031l.127-.059.214-.181a.829.829 0 0 0 .125-.242.633.633 0 0 0 .026-.238V10.993a.712.712 0 0 0-1.215-.505"
                  fill="#fff"
                ></path>
                <path
                  data-name="T125"
                  d="M52.48 25.768h5.577a.675.675 0 0 0 .507-.207.711.711 0 0 0-.5-1.215h-4.927v-5.6h2.1a.607.607 0 0 0 .506-.209.7.7 0 0 0 0-1.007.688.688 0 0 0-.5-.207h-2.106v-5.609h4.922a.626.626 0 0 0 .506-.209.7.7 0 0 0 0-1.005.7.7 0 0 0-.5-.208h-5.718a.7.7 0 0 0-.555.347 1.013 1.013 0 0 0-.081.558v13.709s-.057.863.766.863"
                  fill="#fff"
                ></path>
                <path
                  data-name="T126"
                  d="M64.297 25.051a.712.712 0 1 0 1.423.006v-6.313h4.195v6.3a.722.722 0 0 0 .7.726h.011a.723.723 0 0 0 .713-.717V11.008a.712.712 0 1 0-1.423-.006v6.319h-4.195v-6.315a.725.725 0 0 0-.782-.718.722.722 0 0 0-.641.715z"
                  fill="#fff"
                ></path>
                <path
                  data-name="T127"
                  d="M79.35 17.315h-2.319l2.068-6.075a.714.714 0 0 0-1.351-.46l-4.779 14.039a.714.714 0 0 0 1.351.46l2.225-6.536h2.8a.714.714 0 1 0 0-1.427"
                  fill="#ff2424"
                ></path>
                <path
                  data-name="T128"
                  d="M86.18 11.72h2.793a.748.748 0 0 0 .506-.208.7.7 0 0 0 0-1.007.665.665 0 0 0-.5-.208h-2.743l-.05-.014-.085.014a3.529 3.529 0 0 0-3.453 3.555v8.44a3.552 3.552 0 0 0 3.555 3.483h2.778a.706.706 0 0 0 .5-1.214.666.666 0 0 0-.5-.209h-2.833a2.085 2.085 0 0 1-2.074-2.107v-8.434a2.107 2.107 0 0 1 2.107-2.091"
                  fill="#fff"
                ></path>
                <path
                  data-name="T129"
                  d="M95.579 16.687l2.673-5.332a.708.708 0 0 0-.858-1.029.693.693 0 0 0-.4.363l-2.745 5.476a.712.712 0 0 0-.133.271l-1.414 2.82V11.01a.712.712 0 1 0-1.424 0v14.049a.722.722 0 0 0 .7.722h.013a.724.724 0 0 0 .712-.716v-2.632l1.98-3.953 2.268 6.8a.718.718 0 0 0 .674.5.726.726 0 0 0 .675-.942z"
                  fill="#fff"
                ></path>
                <path
                  data-name="T130"
                  d="M19.745 10.311a.733.733 0 0 0-.909.454l-2.123 6.414-2.137-6.412a.728.728 0 0 0-.744-.484.726.726 0 0 0-.607.94l2.783 8.323v5.513a.716.716 0 0 0 .627.722.694.694 0 0 0 .08.005.712.712 0 0 0 .478-.189.7.7 0 0 0 .237-.528v-5.536l2.769-8.309a.729.729 0 0 0-.453-.909"
                  fill="#fff"
                ></path>
                <path
                  data-name="T131"
                  d="M22.598 25.768h5.577a.675.675 0 0 0 .507-.207.711.711 0 0 0-.5-1.215h-4.926v-5.6h2.1a.607.607 0 0 0 .506-.209.7.7 0 0 0 0-1.007.688.688 0 0 0-.5-.207h-2.107v-5.609h4.922a.626.626 0 0 0 .506-.209.7.7 0 0 0 0-1.005.7.7 0 0 0-.5-.208H22.47a.7.7 0 0 0-.555.347 1.014 1.014 0 0 0-.081.558v13.709s-.056.863.766.863"
                  fill="#fff"
                ></path>
                <path
                  data-name="T132"
                  d="M33.998 17.219a2.731 2.731 0 0 1-1.45-.566 2.878 2.878 0 0 1-.7-2.268 3.445 3.445 0 0 1 .375-1.66 2.038 2.038 0 0 1 2.9-.657 2.213 2.213 0 0 1 .9 1.349 1.81 1.81 0 0 0 .306.9.676.676 0 0 0 .947 0 1.112 1.112 0 0 0 .2-.881 3.5 3.5 0 0 0-6.632-1.153 5.234 5.234 0 0 0-.411 2.505 4.589 4.589 0 0 0 .6 2.286 3.676 3.676 0 0 0 2.483 1.557 3.311 3.311 0 0 1 1.806.543 3.382 3.382 0 0 1 .77 3.053 2.68 2.68 0 0 1-.507 1.367 2.077 2.077 0 0 1-2.086.713 2.141 2.141 0 0 1-1.538-1.59 1.963 1.963 0 0 0-.3-.952.7.7 0 0 0-1.031.061 1.133 1.133 0 0 0-.14.778 3.525 3.525 0 0 0 4.94 2.865 3.424 3.424 0 0 0 1.555-1.381 6.151 6.151 0 0 0 .076-5.012 3.924 3.924 0 0 0-3.06-1.849"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </h2>
          <ul>
            <p>
              <b>Disabled:&nbsp;</b>
              {pageContext.pro.disabled.toString()}
            </p>
            <p>
              <b>Managed:&nbsp;</b>
              {pageContext.pro.managed.toString()}
            </p>
            <p>
              <b>Max Bounty:&nbsp;</b>
              {pageContext.pro.max_bounty}
            </p>
            <p>
              <b>Min Bounty:&nbsp;</b>
              {pageContext.pro.min_bounty}
            </p>
            <p>
              <b>Public:&nbsp;</b>
              {pageContext.pro.public.toString()}
            </p>
          </ul>

          <h2>In scope:</h2>
          <ul>
            {pageContext.pro.targets.in_scope.map((co) => {
              return (
                <li>
                  <b>type:&nbsp;</b>
                  {co.type}
                  {co.target}
                </li>
              );
            })}
          </ul>
        </StyledArticle>

        <br />
        <br />
        <br />
      </StyledSection>
    </>
  );
};

export default singleProgram;
