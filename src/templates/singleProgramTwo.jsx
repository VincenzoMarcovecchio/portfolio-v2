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
        <h2>
          Powered by:&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="334" height="65">
            <g fill="#000" fill-rule="evenodd">
              <path d="M7.602 1.612c-.88-.53-1.94-.803-3.186-.803-1.301 0-2.361.273-3.181.803C.416 2.148 0 2.847 0 3.694V61.95c0 .739.426 1.41 1.279 2.033.847.624 1.891.935 3.137.935 1.191 0 2.235-.311 3.142-.935.902-.617 1.361-1.294 1.361-2.033V3.699c0-.852-.437-1.541-1.317-2.087M14.952 32.183c-.535.497-.765 1.252-.666 2.284.092 1.022.568 1.995 1.41 2.913.846.924 1.792 1.503 2.874 1.749 1.066.24 1.875.109 2.41-.383l4.722-2.924V61.95c0 .739.41 1.41 1.24 2.033.809.624 1.848.935 3.094.935 1.246 0 2.322-.311 3.224-.935.907-.623 1.361-1.294 1.361-2.033V26.822c0-.853-.443-1.541-1.317-2.071-.875-.541-1.962-.804-3.268-.804-1.301 0-2.345.263-3.143.804l-11.941 7.432M50.163 52.818c0 1.793.498 3.143 1.508 4.072 1.006.924 2.329 1.388 3.952 1.388 2.126 0 4.159-.896 6.088-2.689 1.934-1.798 2.896-3.693 2.896-5.716v-3.104h-2.099c-2.519 0-4.579.109-6.175.334a9.108 9.108 0 0 0-4.285 1.764c-1.256.951-1.885 2.274-1.885 3.951zm-8.908 1.093c0-4.486 1.683-7.606 5.039-9.366 3.366-1.771 8.236-2.65 14.619-2.65h3.694v-1.553c0-2.525-.683-4.699-2.055-6.536-1.371-1.836-3.454-2.749-6.257-2.749-2.41 0-4.531.459-6.345 1.383-1.825.923-2.814 1.388-2.984 1.388-.951 0-1.721-.465-2.312-1.388a5.576 5.576 0 0 1-.88-3.066c0-1.454 1.356-2.716 4.078-3.782 2.71-1.066 5.585-1.596 8.607-1.596 5.771 0 10.039 1.552 12.815 4.662 2.771 3.115 4.165 6.99 4.165 11.64v21.084c0 .793-.41 1.476-1.225 2.071-.809.579-1.836.875-3.065.875-1.127 0-2.072-.296-2.853-.875-.787-.595-1.181-1.278-1.181-2.071v-2.94C61.361 62.815 57.136 65 52.431 65c-3.251 0-5.929-.951-8.028-2.863-2.098-1.897-3.148-4.646-3.148-8.226zM81.079 48.277v-7.563c0-4.984 1.453-9.012 4.372-12.094 2.907-3.082 7.246-4.624 13.017-4.624 3.64 0 6.695.629 9.159 1.891 2.465 1.257 3.7 2.678 3.7 4.241 0 .957-.355 1.907-1.049 2.858-.705.951-1.53 1.432-2.481 1.432-.279 0-1.274-.426-2.984-1.262-1.705-.837-3.596-1.262-5.667-1.262-6.165 0-9.247 2.951-9.247 8.847v7.52c0 5.896 3.109 8.847 9.329 8.847 2.126 0 4.038-.453 5.754-1.349 1.706-.897 2.727-1.35 3.072-1.35 1.114 0 2.027.453 2.727 1.35.699.896 1.043 1.852 1.043 2.852 0 1.569-1.284 3.029-3.863 4.367-2.574 1.35-5.711 2.022-9.405 2.022-5.832 0-10.198-1.524-13.105-4.585-2.919-3.05-4.372-7.099-4.372-12.138M118.3 61.382V3.667c0-.842.388-1.525 1.176-2.055.786-.536 1.814-.803 3.109-.803 1.284 0 2.366.267 3.23.803.874.53 1.3 1.213 1.3 2.055v37.386L144.68 24.92a2.519 2.519 0 0 1 1.847-.76c.951 0 1.907.454 2.858 1.35.956.896 1.426 1.848 1.426 2.858 0 .727-.251 1.345-.754 1.847l-10.842 9.663 13.198 18.985c.333.503.503 1.011.503 1.514 0 1.005-.563 2.005-1.684 2.983-1.12.973-2.213 1.471-3.279 1.471-.95 0-1.732-.421-2.349-1.258l-12.351-18.23-6.138 5.541v10.498c0 .732-.448 1.399-1.344 2.022-.891.617-1.951.924-3.186.924-1.235 0-2.257-.307-3.066-.924-.814-.623-1.219-1.29-1.219-2.022M165.01 41.135h13.951c1.23 0 2.055-.164 2.476-.492.427-.333.629-1 .629-1.99 0-2.202-.809-4.076-2.432-5.618-1.629-1.546-3.64-2.317-6.049-2.317-2.356 0-4.373.733-6.051 2.192-1.678 1.465-2.524 3.323-2.524 5.574v2.651zm-8.821 7.142v-7.979c0-4.426 1.71-8.246 5.126-11.471 3.421-3.219 7.536-4.831 12.351-4.831 4.59 0 8.526 1.46 11.804 4.372 3.279 2.913 4.919 6.586 4.919 11.034 0 1.716-.197 3.099-.591 4.154-.387 1.06-1.01 1.792-1.846 2.224-.842.432-1.629.7-2.356.82-.732.103-1.677.169-2.858.169H165.01v1.946c0 2.819 1.01 5.06 3.027 6.732 2.016 1.661 4.651 2.493 7.903 2.493 2.295 0 4.459-.537 6.503-1.607 2.049-1.071 3.295-1.607 3.738-1.607.956 0 1.771.448 2.438 1.344.676.897 1.01 1.771 1.01 2.613 0 1.387-1.349 2.781-4.033 4.202-2.683 1.405-5.995 2.115-9.913 2.115-5.711 0-10.389-1.541-14.029-4.623-3.64-3.088-5.465-7.115-5.465-12.1zM197.526 61.382V27.358c0-.842.404-1.525 1.219-2.055.808-.536 1.831-.804 3.077-.804 1.109 0 2.065.268 2.846.809.788.541 1.176 1.235 1.176 2.082v3.738c.95-1.978 2.399-3.661 4.333-5.049 1.93-1.388 4.039-2.083 6.334-2.083h2.7c.891 0 1.672.383 2.344 1.148.673.765 1.012 1.683 1.012 2.76 0 1.071-.339 2.011-1.012 2.798-.672.798-1.453 1.192-2.344 1.192h-2.7c-2.678 0-5.05 1.147-7.094 3.437-2.048 2.289-3.071 5.252-3.071 8.88v17.183c0 .726-.447 1.398-1.343 2.01-.891.617-1.958.924-3.181.924-1.246 0-2.269-.307-3.077-.924-.815-.623-1.219-1.29-1.219-2.022M230.501 48.922c0 2.842 1.017 5.367 3.061 7.563 2.044 2.204 4.498 3.301 7.356 3.301 2.908 0 5.4-1.097 7.476-3.301 2.071-2.196 3.109-4.721 3.109-7.563v-9.099c0-2.738-1.048-5.186-3.153-7.361-2.103-2.17-4.574-3.257-7.432-3.257-2.858 0-5.312 1.087-7.356 3.257-2.044 2.175-3.061 4.623-3.061 7.361v9.099zm-5.464.027v-9.153c0-4.258 1.568-7.941 4.7-11.05 3.142-3.11 6.869-4.668 11.181-4.668 4.306 0 8.066 1.542 11.258 4.629 3.192 3.077 4.787 6.772 4.787 11.089v9.153c0 4.198-1.606 7.909-4.826 11.138-3.219 3.219-6.962 4.826-11.219 4.826-4.203 0-7.902-1.607-11.094-4.826-3.192-3.229-4.787-6.94-4.787-11.138zM263.658 62.137V26.598c0-.613.251-1.099.754-1.465.503-.366 1.147-.552 1.934-.552.673 0 1.263.202 1.766.601.503.399.754.88.754 1.448v3.919c.956-1.82 2.41-3.345 4.372-4.591 1.956-1.251 4.257-1.88 6.886-1.88 4.039 0 7.536 1.542 10.504 4.629 2.967 3.077 4.454 6.772 4.454 11.089v22.341c0 .678-.28 1.213-.842 1.596a3.302 3.302 0 0 1-1.935.595 3.13 3.13 0 0 1-1.842-.595c-.568-.383-.841-.914-.841-1.585V39.851c0-2.739-1.039-5.203-3.11-7.378-2.076-2.176-4.541-3.268-7.394-3.268-2.634 0-4.956.984-6.973 2.934-2.017 1.957-3.022 4.531-3.022 7.712v22.297c0 .557-.29 1.06-.847 1.507a2.992 2.992 0 0 1-1.93.673c-.787 0-1.431-.224-1.934-.673-.503-.447-.754-.95-.754-1.518M306.864 42.058h16.804c1.684 0 2.798-.175 3.362-.541.557-.355.836-1.131.836-2.295 0-2.781-.99-5.23-2.985-7.345-1.983-2.121-4.492-3.17-7.513-3.17-2.913 0-5.395.995-7.439 3.001-2.043 2-3.065 4.399-3.065 7.181v3.169zm-5.459 6.891v-9.405c0-4.208 1.573-7.831 4.699-10.886 3.143-3.05 6.919-4.58 11.346-4.58 4.262 0 7.94 1.465 11.055 4.372 3.104 2.924 4.662 6.57 4.662 10.942 0 1.562-.186 2.819-.546 3.77-.372.951-.957 1.612-1.772 2.011-.808.393-1.552.645-2.219.755-.676.114-1.6.169-2.775.169h-18.991v3.104c0 3.312 1.191 5.956 3.568 7.941 2.389 1.989 5.454 2.989 9.209 2.989 1.897 0 3.569-.278 4.995-.847 1.426-.552 2.519-1.121 3.274-1.677.759-.564 1.355-.842 1.808-.842.617 0 1.164.295 1.634.88.481.589.722 1.169.722 1.721 0 1.186-1.208 2.399-3.618 3.661-2.405 1.251-5.405 1.886-8.99 1.886-5.317 0-9.662-1.46-13.017-4.41-3.367-2.94-5.044-6.793-5.044-11.554z" />
            </g>
          </svg>
        </h2>
        <StyledArticle>
          <p>
            <b>Allows bounty splitting:&nbsp;</b>
            {pageContext.pro.allows_bounty_splitting}
          </p>
          <p>
            <b>Average time to first program response:&nbsp;</b>
            {pageContext.pro.average_time_to_first_program_response}
          </p>
          <p>
            <b>Average time to bounty awarded null:&nbsp;</b>
            {pageContext.pro.average_time_to_bounty_awarded}
          </p>
          <p>
            <b> Average time to report resolved:&nbsp;</b>
            {pageContext.pro.average_time_to_report_resolved}
          </p>
          <p>
            <b>Handle&nbsp;</b>
            {pageContext.pro.handle}{" "}
          </p>
          auvik,
          <p>
            <b>Managed program:&nbsp;</b>
            {pageContext.pro.managed_program.toString()}
          </p>
          <p>
            <b>Name:&nbsp;</b>
            {pageContext.pro.name}
          </p>
          <p>
            <b>Offers bounties:&nbsp;</b>
            {pageContext.pro.offers_bounties.toString()}
          </p>
          <p>
            <b>Offers swag:&nbsp;</b>
            {pageContext.pro.offers_swag.toString()}
          </p>
          <p>
            <b>Response efficiency percentage:&nbsp;</b>
            {pageContext.pro.response_efficiency_percentage}
          </p>
          <p>
            <b>Submission state:&nbsp;</b>
            {pageContext.pro.submission_state}
          </p>
          <p>
            <b>Url:&nbsp;</b>
            {pageContext.pro.url}
          </p>
          <p>
            <b>Website:&nbsp;</b>
            {pageContext.pro.website}
          </p>
          <h2>In scope:</h2>
          {pageContext.pro.targets.in_scope.map((co) => {
            return (
              <>
                <li>
                  <b>Asset identifier:&nbsp;</b>
                  {co.asset_identifier}
                </li>
                <li>
                  <b>Asset type:&nbsp;</b>
                  {co.asset_type}
                </li>
                <li>
                  <b>Availability requirement:&nbsp;</b>
                  {co.availability_requirement}
                </li>
                <li>
                  <b>Confidentiality requirement:&nbsp;</b>
                  {co.confidentiality_requirement}
                </li>
                <li>
                  <b>Eligible for bounty:&nbsp;</b>
                  {(co.eligible_for_bounty &&
                    co.eligible_for_bounty.toString()) ||
                    ""}
                </li>

                <li>
                  <b>Eligible for submissions:&nbsp;</b>
                  {(co.eligible_for_submission &&
                    co.eligible_for_submission.toString()) ||
                    ""}
                </li>
                <li>
                  <b>Instruction:&nbsp;</b>
                  {co.instruction}
                </li>
                <li>
                  <b>Integrity requirements:&nbsp;</b>
                  {co.integrity_requirement}
                </li>
                <li>
                  <b>Max severity:&nbsp;</b>
                  {co.max_severity}
                </li>
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