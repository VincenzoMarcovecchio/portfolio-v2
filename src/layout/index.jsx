import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default class Layout extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      document.querySelector('.gears1').style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
      document.querySelector('.gears2').style.transform = "rotate(-" + window.pageYOffset/2 + "deg)";
    }, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      document.querySelector('.gears2').style.transform = "rotate(-" + window.pageYOffset/2 + "deg)";
      document.querySelector('.gears1').style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
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

              
            :root * {
              /* Pause the animation */
              animation-play-state: paused;
              /* Bind the animation to scroll */
              animation-delay: calc(var(--scroll) * -1s);
              /* These last 2 properites clean up overshoot weirdness */
              animation-iteration-count: 1;
              animation-fill-mode: both;
            }


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
           

              
            .gears1 {        
              position: fixed;
              top: 53%;
              left: -;
              width: 371px;
              height: 420px;
              z-index: -5;
              opacity: 0.2;
            }
            
            .gears1 {  
            position: fixed;
            top: 15%;
            left: -10vw;
            width: 371px;
            /* max-width: 40vw; */
            height: 420px;
            /* perspective: 100vmin; */
            z-index: -5;
            /* transform-style: preserve-3d; */
            /* transform: rotateX(0deg); */
            opacity: 0.99;
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

        <img className='gears1' src='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjQiIHdpZHRoPSI4OTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8y%0D%0AMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTQ0Ny45MzggMzUwQzM1OC41MzEgMzUwIDI4NiA0MjIuNTMx%0D%0AIDI4NiA1MTJjMCA4OS4zNzUgNzIuNTMxIDE2Mi4wNjIgMTYxLjkzOCAxNjIuMDYyIDg5LjQzOCAw%0D%0AIDE2MS40MzgtNzIuNjg4IDE2MS40MzgtMTYyLjA2MkM2MDkuMzc1IDQyMi41MzEgNTM3LjM3NSAz%0D%0ANTAgNDQ3LjkzOCAzNTB6TTc3Mi42MjUgNjA1LjA2MmwtMjkuMTg4IDcwLjMxMiA1Mi4wNjIgMTAy%0D%0ALjI1IDYuODc1IDEzLjUtNzIuMTg4IDcyLjE4OEw2MTEuNzUgODA3LjM3NWwtNzAuMzEyIDI4Ljg3%0D%0ANUw1MDUuNzUgOTQ1LjVsLTQuNTYyIDE0LjVIMzk5LjE1NkwzNTUgODM2LjY4OGwtNzAuMzEyLTI5%0D%0ALTEwMi40MDQgNTEuOTM4LTEzLjUgNi43NS03Mi4xNTYtNzIuMTI1IDU1Ljg3NS0xMTguNS0yOC45%0D%0ANjktNzAuMjVMMTQuNDY5IDU2OS44NzUgMCA1NjUuMTg4VjQ2My4yMTlMMTIzLjQwNiA0MTlsMjgu%0D%0AOTY5LTcwLjE4OC01MS45MDYtMTAyLjQ2OS02Ljg0NC0xMy40MzggNzIuMDYyLTcyLjA2MiAxMTgu%0D%0ANTk0IDU1Ljg0NCA3MC4yMTktMjkuMDMxIDM1LjY1Ni0xMDkuMTg4TDM5NC43NSA2NGgxMDJsNDQu%0D%0AMTg4IDEyMy40NjkgNzAuMTI1IDI5LjAzMUw3MTMuNSAxNjQuNTMwOTk5OTk5OTk5OTVsMTMuNjI1%0D%0ALTYuODQ0IDcyLjEyNSA3Mi4wNjItNTUuODc1IDExOC40MDZMNzcyLjI1IDQxOC41bDEwOS4zNzUg%0D%0AMzUuNjU2TDg5NiA0NTguNzV2MTAxLjkzOEw3NzIuNjI1IDYwNS4wNjJ6IiAvPgo8L3N2Zz4K' height="600"/>
        
        <img className='gears2' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAyNCIgd2lkdGg9Ijg5NiIgc3R5bGU9ImZpbGw6IGxpZ2h0c2VhZ3JlZW47Ij4NCiAgPHBhdGggZD0iTTQ0Ny45MzggMzUwQzM1OC41MzEgMzUwIDI4NiA0MjIuNTMxIDI4NiA1MTJjMCA4OS4zNzUgNzIuNTMxIDE2Mi4wNjIgMTYxLjkzOCAxNjIuMDYyIDg5LjQzOCAwIDE2MS40MzgtNzIuNjg4IDE2MS40MzgtMTYyLjA2MkM2MDkuMzc1IDQyMi41MzEgNTM3LjM3NSAzNTAgNDQ3LjkzOCAzNTB6TTc3Mi42MjUgNjA1LjA2MmwtMjkuMTg4IDcwLjMxMiA1Mi4wNjIgMTAyLjI1IDYuODc1IDEzLjUtNzIuMTg4IDcyLjE4OEw2MTEuNzUgODA3LjM3NWwtNzAuMzEyIDI4Ljg3NUw1MDUuNzUgOTQ1LjVsLTQuNTYyIDE0LjVIMzk5LjE1NkwzNTUgODM2LjY4OGwtNzAuMzEyLTI5LTEwMi40MDQgNTEuOTM4LTEzLjUgNi43NS03Mi4xNTYtNzIuMTI1IDU1Ljg3NS0xMTguNS0yOC45NjktNzAuMjVMMTQuNDY5IDU2OS44NzUgMCA1NjUuMTg4VjQ2My4yMTlMMTIzLjQwNiA0MTlsMjguOTY5LTcwLjE4OC01MS45MDYtMTAyLjQ2OS02Ljg0NC0xMy40MzggNzIuMDYyLTcyLjA2MiAxMTguNTk0IDU1Ljg0NCA3MC4yMTktMjkuMDMxIDM1LjY1Ni0xMDkuMTg4TDM5NC43NSA2NGgxMDJsNDQuMTg4IDEyMy40NjkgNzAuMTI1IDI5LjAzMUw3MTMuNSAxNjQuNTMwOTk5OTk5OTk5OTVsMTMuNjI1LTYuODQ0IDcyLjEyNSA3Mi4wNjItNTUuODc1IDExOC40MDZMNzcyLjI1IDQxOC41bDEwOS4zNzUgMzUuNjU2TDg5NiA0NTguNzV2MTAxLjkzOEw3NzIuNjI1IDYwNS4wNjJ6Ii8+DQo8L3N2Zz4=' height="400"/>

        <div className="minheight">{children}</div>
        <Footer config={config} />
      </React.Fragment>
    );
  }
}
