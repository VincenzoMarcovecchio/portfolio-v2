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
            .minheight {
              min-height:100vh;
            }

            iframe:not(.utterances-frame) {
              border: 0;
              width: 100%;
              height: 100%;
              min-height: 100vh;
            
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
        <div className="minheight">{children}</div>
        <Footer config={config} />


        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script>

          var $gear1 = $(".gear1"),
          $gear2 = $(".gear2"),
          $gear3 = $(".gear3"),
          $body = $("body"),
          bodyHeight = $body.height();

          function getScrollTop() {
if (typeof pageYOffset != "undefined") {
//most browsers except IE before #9
return pageYOffset;
} else {
var B = document.body; //IE 'quirks'
          var D = document.documentElement; //IE with doctype
          D = D.clientHeight ? D : B;
          return D.scrollTop;
}
}

          $(window).scroll(function () {
var scroll = getScrollTop();
          $gear1.css({
            transform: "rotate(" + (scroll / bodyHeight) * 800 + "deg)",
          "-moz-transform": "rotate(" + (scroll / bodyHeight) * 800 + "deg)",
          "-ms-transform": "rotate(" + (scroll / bodyHeight) * 800 + "deg)",
          "-o-transform:rotate": "rotate(" + (scroll / bodyHeight) * 800 + "deg)"
});
          $gear2.css({
            transform: "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)",
          "-moz-transform": "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)",
          "-ms-transform": "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)",
          "-o-transform:rotate": "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)"
});
          $gear3.css({
            transform: "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)",
          "-moz-transform": "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)",
          "-ms-transform": "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)",
          "-o-transform:rotate": "rotate(" + (scroll / bodyHeight) * "-1000" + "deg)"
});
});

        </script>
      </React.Fragment>
    );
  }
}
