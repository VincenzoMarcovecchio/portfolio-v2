import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default class Layout extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      document.querySelector('.gear-big').style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
      document.querySelector('.gear-small').style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)";
    }, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      document.querySelector('.gear-small').style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)";
      document.querySelector('.gear-big').style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
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
           

              .svg-wrappers svg {
                height: 400px;
                width: 400px;
                position: fixed;
                left: -10vw;
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
        <div className="svg-wrappers">
        <svg viewBox="0 0 175 175" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}}>
  <g className="gears">
    <path className="gear-big" d="M93.359 135.907c-.586-1.05-.464-2.691.261-3.643l1.669-2.396c.631-1.026 2.112-1.701 3.296-1.504l9.342 1.511c1.182.189 2.519-.561 2.975-1.674l1.312-3.632c.367-1.147-.166-2.584-1.192-3.198l-8.144-4.871c-1.028-.617-1.739-2.093-1.579-3.285l.256-2.94c.049-1.204.998-2.531 2.118-2.959l8.846-3.408c1.111-.431 1.883-1.751 1.709-2.948l-.68-3.8c-.263-1.177-1.462-2.146-2.651-2.16l-9.46-.121c-1.193-.012-2.537-.934-2.991-2.051l-1.236-2.64c-.558-1.06-.402-2.698.353-3.627l6.002-7.418c.749-.936.789-2.494.092-3.473 0 0-.327-.448-1.21-1.512-.878-1.066-1.266-1.468-1.266-1.468-.833-.857-2.368-1.083-3.408-.49l-8.282 4.68c-1.042.587-2.664.468-3.61-.265l-2.37-1.683c-1.008-.638-1.677-2.136-1.49-3.327l1.506-9.409c.193-1.191-.553-2.539-1.659-3l-3.6-1.327c-1.132-.37-2.563.174-3.177 1.203l-4.83 8.211c-.612 1.03-2.077 1.747-3.258 1.588l-2.923-.253c-1.194-.044-2.517-1.001-2.938-2.128l-3.373-8.92c-.424-1.124-1.739-1.904-2.921-1.732l-3.794.692c-1.159.263-2.129 1.46-2.145 2.666l-.118 9.543c-.014 1.206-.929 2.561-2.029 3.022l-2.608 1.24c-1.059.557-2.679.394-3.606-.369l-7.335-6.031c-.925-.759-2.48-.807-3.448-.111 0 0-.438.316-1.516 1.238-1.05.894-1.436 1.279-1.436 1.279-.849.842-1.064 2.39-.482 3.443l4.632 8.328c.586 1.045.469 2.684-.258 3.64L29.036 86.8c-.639 1.017-2.122 1.693-3.303 1.502l-9.347-1.516c-1.177-.193-2.514.559-2.971 1.674l-1.313 3.639c-.367 1.145.167 2.582 1.193 3.199l8.135 4.871c1.027.617 1.742 2.093 1.589 3.285l-.254 2.937c-.043 1.204-.993 2.531-2.111 2.96l-8.839 3.399c-1.113.421-1.888 1.746-1.719 2.936l.678 3.822c.262 1.176 1.45 2.151 2.641 2.163l9.463.124c1.193.014 2.544.935 3.001 2.043l1.227 2.643c.545 1.068.381 2.708-.372 3.639l-5.968 7.405c-.755.932-.797 2.492-.096 3.465 0 0 .32.449 1.214 1.516.883 1.066 1.269 1.469 1.269 1.469.831.863 2.361 1.084 3.402.497l8.252-4.67c1.036-.588 2.67-.475 3.616.256l2.377 1.66c1.014.641 1.681 2.138 1.492 3.323l-1.511 9.424c-.193 1.192.554 2.533 1.652 2.994l3.639 1.332c1.135.372 2.557-.17 3.167-1.2l4.827-8.206c.61-1.034 2.076-1.755 3.258-1.595l2.905.256c1.196.042 2.514 1.004 2.94 2.128l3.382 8.921c.428 1.121 1.74 1.9 2.921 1.726l3.78-.673c1.17-.273 2.129-1.474 2.142-2.68l.109-9.54c.016-1.204.93-2.564 2.036-3.018l2.62-1.24c1.057-.554 2.683-.385 3.61.372l7.335 6.025c.925.762 2.478.805 3.446.102 0 0 .438-.312 1.5-1.219 1.056-.899 1.45-1.285 1.45-1.285.852-.839 1.071-2.387.489-3.434l-4.63-8.324ZM68.78 118.98c-5.825 3.688-13.52 1.916-17.181-3.967-3.653-5.883-1.894-13.638 3.934-17.324 5.845-3.695 13.534-1.928 17.192 3.967 3.651 5.878 1.893 13.633-3.945 17.324Z" style={{fill: '#58595b', fillRule: 'nonzero'}}/>
    <path className="gear-small" d="M143.557 72.317c.8-.896 2.424-1.485 3.599-1.313l6.529.957c1.185.168 2.609-.559 3.171-1.618 0 0 .247-.451.803-1.73.525-1.25.696-1.753.696-1.753.387-1.138-.056-2.684-.99-3.438l-5.16-4.165c-.927-.753-1.605-2.347-1.506-3.548l.075-3.528c-.073-1.201.663-2.772 1.619-3.494l5.294-3.979c.953-.722 1.427-2.246 1.054-3.385l-1.384-3.536c-.498-1.092-1.876-1.875-3.064-1.746l-6.551.721c-1.193.131-2.787-.514-3.552-1.434l-2.434-2.516c-.89-.802-1.473-2.434-1.301-3.626l.946-6.604c.172-1.188-.553-2.626-1.605-3.188 0 0-.462-.255-1.721-.807-1.245-.55-1.738-.719-1.738-.719-1.127-.385-2.666.069-3.412 1.007l-4.138 5.192c-.745.94-2.326 1.621-3.513 1.518l-3.488-.072c-1.193.068-2.752-.666-3.462-1.632l-3.96-5.325c-.717-.961-2.227-1.439-3.356-1.064l-3.493 1.391c-1.085.504-1.871 1.895-1.74 3.089l.711 6.621c.127 1.196-.515 2.808-1.433 3.578l-2.507 2.447c-.798.896-2.415 1.486-3.592 1.318l-6.541-.961c-1.187-.173-2.607.551-3.176 1.61 0 0-.24.441-.765 1.719-.572 1.271-.732 1.757-.732 1.757-.382 1.144.068 2.692 1 3.443l5.163 4.17c.925.75 1.605 2.351 1.501 3.55l-.082 3.519c.066 1.203-.659 2.775-1.618 3.494l-5.281 3.979c-.958.717-1.425 2.239-1.05 3.383l1.379 3.533c.494 1.095 1.864 1.886 3.051 1.753l6.564-.724c1.184-.128 2.781.518 3.548 1.444l2.431 2.51c.892.803 1.481 2.433 1.307 3.622l-.942 6.617c-.174 1.19.551 2.623 1.601 3.189 0 0 .452.238 1.706.803 1.257.538 1.74.706 1.74.706 1.125.387 2.658-.058 3.404-.992l4.149-5.198c.744-.937 2.329-1.626 3.515-1.521l3.497.068c1.191-.065 2.752.67 3.465 1.63l3.953 5.35c.708.963 2.215 1.438 3.349 1.059l3.495-1.404c1.083-.496 1.869-1.886 1.737-3.08l-.708-6.633c-.127-1.201.516-2.808 1.433-3.58l2.51-2.434Zm-24.748-9.004c-5.388-2.373-7.872-8.683-5.527-14.135 2.346-5.42 8.61-7.908 14.01-5.541 5.393 2.345 7.861 8.668 5.519 14.102-2.341 5.438-8.608 7.911-14.002 5.574Z" style={{fill: '#58595b', fillRule: 'nonzero'}}/>
  </g>
</svg>
</div>
        <div className="minheight">{children}</div>




        <Footer config={config} />
      </React.Fragment>
    );
  }
}
