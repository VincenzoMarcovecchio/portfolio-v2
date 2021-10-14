import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Helmet
          style={[
            {
              cssText: `
            body {
                box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Roboto, Arial,
            Noto Sans, sans-serif, Apple Color Emoji, Segoe UI, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
            max-width: 1440px;
            margin: 0 auto;
            padding: 0;
            line-height: 1.3;
            font-size: 1rem;


            }
        `,
            },
          ]}
        >
          <html lang="en" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
          />
        </Helmet>
        <Header />
        {children}

        <Footer config={config} />
      </React.Fragment>
    );
  }
}
