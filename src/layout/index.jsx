import React,{componentDidMount} from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


export default class Layout extends React.Component {
  
componentDidMount(){
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const headerNav = document.querySelector(".header__nav");
  const headerNavItems = document.querySelectorAll(".header__list > *");
  function openHamburgerMenu() {
    hamburgerMenu.classList.toggle("hamburger-menu--open");
  }

  function showNav() {
    headerNav.classList.toggle("header__nav--active");
  }

  function animateNavItems() {
    headerNavItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `fadeInRight 1s ease forwards ${index / 7}s`;
      }
    });
  }

  function disableScroll() {
    document.body.classList.toggle("disable-scroll");
  }

  function toggleNav() {
    openHamburgerMenu();
    showNav();
    animateNavItems();
    disableScroll();
  }

  hamburgerMenu.addEventListener("click", toggleNav);
  headerNavItems.addEventListener("click", toggleNav);
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
