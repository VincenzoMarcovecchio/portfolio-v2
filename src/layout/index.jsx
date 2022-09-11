import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default class Layout extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      document.querySelector('.gears1').style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
      document.querySelector('.gears2').style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      document.querySelector('.gears2').style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
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
              top: 50%;
              left: -8.5vw;
              width: 25vw;
              height: 0;
              perspective: 100vmin;
              z-index: -5;
              transform-style: preserve-3d;
              transform: rotateX(0deg);

            }

            .gears2 {
              position: fixed;
              top: 15%;
              left: -7vw;
              width: 25vw;
              height: 0;
              perspective: 100vmin;
              z-index: -5;
              transform-style: preserve-3d;
              transform: rotateX(0deg);
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
        <svg className="gears1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 250 250" enable-background="new 0 0 250 250">
  <path fill="#7F2A43" d="M197.7,139.7c0.9-4.8,1.4-9.7,1.4-14.7s-0.5-9.9-1.4-14.7l-23.9-0.6c-1.3-4.7-3.2-9.2-5.6-13.4L184.8,79
	c-5.6-8.1-12.7-15.2-20.8-20.8l-17.3,16.5c-4.2-2.4-8.7-4.3-13.4-5.6l-0.6-23.9c-4.8-0.9-9.7-1.4-14.7-1.4s-9.9,0.5-14.7,1.4
	l-0.6,23.9c-4.7,1.3-9.2,3.2-13.4,5.6L72,58.2C63.8,63.8,56.7,70.9,51.1,79l16.5,17.3c-2.4,4.2-4.3,8.7-5.6,13.4l-23.9,0.6
	c-0.9,4.8-1.4,9.7-1.4,14.7s0.5,9.9,1.4,14.7l23.9,0.6c1.3,4.7,3.2,9.2,5.6,13.4L51.1,171c5.6,8.1,12.7,15.2,20.8,20.8l17.3-16.5
	c4.2,2.4,8.7,4.3,13.4,5.6l0.6,23.9c4.8,0.9,9.7,1.4,14.7,1.4s9.9-0.5,14.7-1.4l0.6-23.9c4.7-1.3,9.2-3.2,13.4-5.6l17.3,16.5
	c8.1-5.6,15.2-12.7,20.8-20.8l-16.5-17.3c2.4-4.2,4.3-8.7,5.6-13.4L197.7,139.7z M117.9,148.2c-12.8,0-23.2-10.4-23.2-23.2
	c0-12.8,10.4-23.2,23.2-23.2s23.2,10.4,23.2,23.2C141.1,137.8,130.7,148.2,117.9,148.2z"/>
  <defs>
    <path id="SVGID_1_" d="M197.7,139.7c0.9-4.8,1.4-9.7,1.4-14.7s-0.5-9.9-1.4-14.7l-23.9-0.6c-1.3-4.7-3.2-9.2-5.6-13.4L184.8,79
			c-5.6-8.1-12.7-15.2-20.8-20.8l-17.3,16.5c-4.2-2.4-8.7-4.3-13.4-5.6l-0.6-23.9c-4.8-0.9-9.7-1.4-14.7-1.4s-9.9,0.5-14.7,1.4
			l-0.6,23.9c-4.7,1.3-9.2,3.2-13.4,5.6L72,58.2C63.8,63.8,56.7,70.9,51.1,79l16.5,17.3c-2.4,4.2-4.3,8.7-5.6,13.4l-23.9,0.6
			c-0.9,4.8-1.4,9.7-1.4,14.7s0.5,9.9,1.4,14.7l23.9,0.6c1.3,4.7,3.2,9.2,5.6,13.4L51.1,171c5.6,8.1,12.7,15.2,20.8,20.8l17.3-16.5
			c4.2,2.4,8.7,4.3,13.4,5.6l0.6,23.9c4.8,0.9,9.7,1.4,14.7,1.4s9.9-0.5,14.7-1.4l0.6-23.9c4.7-1.3,9.2-3.2,13.4-5.6l17.3,16.5
			c8.1-5.6,15.2-12.7,20.8-20.8l-16.5-17.3c2.4-4.2,4.3-8.7,5.6-13.4L197.7,139.7z M117.9,148.2c-12.8,0-23.2-10.4-23.2-23.2
			c0-12.8,10.4-23.2,23.2-23.2s23.2,10.4,23.2,23.2C141.1,137.8,130.7,148.2,117.9,148.2z"/>
  </defs>
  </svg>
  <svg className="gears2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 250 250" enable-background="new 0 0 250 250">
  <path fill="#7F2A43" d="M197.7,139.7c0.9-4.8,1.4-9.7,1.4-14.7s-0.5-9.9-1.4-14.7l-23.9-0.6c-1.3-4.7-3.2-9.2-5.6-13.4L184.8,79
	c-5.6-8.1-12.7-15.2-20.8-20.8l-17.3,16.5c-4.2-2.4-8.7-4.3-13.4-5.6l-0.6-23.9c-4.8-0.9-9.7-1.4-14.7-1.4s-9.9,0.5-14.7,1.4
	l-0.6,23.9c-4.7,1.3-9.2,3.2-13.4,5.6L72,58.2C63.8,63.8,56.7,70.9,51.1,79l16.5,17.3c-2.4,4.2-4.3,8.7-5.6,13.4l-23.9,0.6
	c-0.9,4.8-1.4,9.7-1.4,14.7s0.5,9.9,1.4,14.7l23.9,0.6c1.3,4.7,3.2,9.2,5.6,13.4L51.1,171c5.6,8.1,12.7,15.2,20.8,20.8l17.3-16.5
	c4.2,2.4,8.7,4.3,13.4,5.6l0.6,23.9c4.8,0.9,9.7,1.4,14.7,1.4s9.9-0.5,14.7-1.4l0.6-23.9c4.7-1.3,9.2-3.2,13.4-5.6l17.3,16.5
	c8.1-5.6,15.2-12.7,20.8-20.8l-16.5-17.3c2.4-4.2,4.3-8.7,5.6-13.4L197.7,139.7z M117.9,148.2c-12.8,0-23.2-10.4-23.2-23.2
	c0-12.8,10.4-23.2,23.2-23.2s23.2,10.4,23.2,23.2C141.1,137.8,130.7,148.2,117.9,148.2z"/>
  <defs>
    <path id="SVGID_1_" d="M197.7,139.7c0.9-4.8,1.4-9.7,1.4-14.7s-0.5-9.9-1.4-14.7l-23.9-0.6c-1.3-4.7-3.2-9.2-5.6-13.4L184.8,79
			c-5.6-8.1-12.7-15.2-20.8-20.8l-17.3,16.5c-4.2-2.4-8.7-4.3-13.4-5.6l-0.6-23.9c-4.8-0.9-9.7-1.4-14.7-1.4s-9.9,0.5-14.7,1.4
			l-0.6,23.9c-4.7,1.3-9.2,3.2-13.4,5.6L72,58.2C63.8,63.8,56.7,70.9,51.1,79l16.5,17.3c-2.4,4.2-4.3,8.7-5.6,13.4l-23.9,0.6
			c-0.9,4.8-1.4,9.7-1.4,14.7s0.5,9.9,1.4,14.7l23.9,0.6c1.3,4.7,3.2,9.2,5.6,13.4L51.1,171c5.6,8.1,12.7,15.2,20.8,20.8l17.3-16.5
			c4.2,2.4,8.7,4.3,13.4,5.6l0.6,23.9c4.8,0.9,9.7,1.4,14.7,1.4s9.9-0.5,14.7-1.4l0.6-23.9c4.7-1.3,9.2-3.2,13.4-5.6l17.3,16.5
			c8.1-5.6,15.2-12.7,20.8-20.8l-16.5-17.3c2.4-4.2,4.3-8.7,5.6-13.4L197.7,139.7z M117.9,148.2c-12.8,0-23.2-10.4-23.2-23.2
			c0-12.8,10.4-23.2,23.2-23.2s23.2,10.4,23.2,23.2C141.1,137.8,130.7,148.2,117.9,148.2z"/>
  </defs>
  </svg>
        <div className="minheight">{children}</div>




        <Footer config={config} />
      </React.Fragment>
    );
  }
}
