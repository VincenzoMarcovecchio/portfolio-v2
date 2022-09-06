import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default class Layout extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }
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
            background-color: rgb(255, 255, 255);
            animation: body 1s linear;


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
           

            @keyframes body {
              to {
                background-color: rgb(19, 48, 97);
              }
            }
            
            .progress {
              height: 3px;
              width: 0%;
              background-color: #fff;
              position: fixed;
              top: 0;
              left: 0;
              animation: progress 1s linear;
            }
            @keyframes progress {
              to {
                background-color: rgb(20, 255, 226);
                width: 100%;
              }
            }
            
            .cube-wrap {
              --size: 30vmin;
              position: fixed;
              top: 50%;
              left: -1%;
              width: 0;
              height: 0;
              perspective: 100vmin;
            }
            .cube {
              transform-style: preserve-3d;
              transform: rotateX(0deg) rotateZ(45deg) rotateY(-45deg);
              animation: cube 1s linear;
            }
            @keyframes cube {
              to {
                transform: rotateX(360deg) rotateZ(45deg) rotateY(-45deg);
              }
            }
            
            .side {
              position: absolute;
              width: var(--size);
              height: var(--size);
              background-color: #eee;
              backface-visibility: visible;
              top: calc(var(--size) * -.5);
              left: calc(var(--size) * -.5);
            }
            .top {
              background-color: #fff;
              transform: rotateX(90deg) translateZ(calc(var(--size) * .5));
            }
            .bottom {
              background-color: #999;
              transform: rotateX(90deg) translateZ(calc(var(--size) * -.5));
            }
            .left {
              background-color: #ccc;
              transform: rotateY(90deg) translateZ(calc(var(--size) * .5));
            }
            .right {
              background-color: #ddd;
              transform: rotateY(90deg) translateZ(calc(var(--size) * -.5));
            }
            .front {
              background-color: #aaa;
              transform: translateZ(calc(var(--size) * .5));
            }
            .back {
              background-color: #bbb;
              transform: translateZ(calc(var(--size) * -.5));
            }
            
            :root * {
              /* Pause the animation */
              animation-play-state: paused;
              /* Bind the animation to scroll */
              animation-delay: calc(var(--scroll) * -1s);
              /* These last 2 properites clean up overshoot weirdness */
              animation-iteration-count: 1;
              animation-fill-mode: both;
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
      </React.Fragment>
    );
  }
}
