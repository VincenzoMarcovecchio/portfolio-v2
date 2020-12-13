---
title: 'Responsive navbar using Gatsby and styled-components'
cover: 'responsive-navbar-using-gatsby-and-styled-components.jpg'
date: '2020-11-30'
category: 'tech'
slug: 'responsive-navbar-using-gatsby-and-styled-components'

tags:
  - design
  - responsiveness
  - navigation
---

This article is about showing you how I implemented this very website navigation bar.

See this magic right here 👇

![alt text](../static/image/navbar.gif 'Logo Title Text 1')

I promise we will make it work 😉

One thing we should understand first is the structure of the header component, how we are going to be nesting the navbar inside and the links to show, basically this is what we have

```
Header
│
└───header__content-wrapper
│   │   logo
│   │
│   └───nav
│   │    │
│   │    └─ul
│   │       └─ li
│   │           └─ a

```

How funny is that 😅

Anyway I must say that for what concerns the desktop version, our implementation is very easy to set up, but as many of you know it is better practice to start with the mobile version, so we better get the hard work done first 💪. I will give you the Jsx code first.

```import React, { useEffect } from 'react';
import engine from '../../assets/engine.jpg'; //thats my logo image
import { Link } from 'gatsby';
import styled from 'styled-components';


export default function Header() {

  useEffect(() => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerNav = document.querySelector('.header__nav');
    const headerNavItems = document.querySelectorAll('.header__list > *');
    function openHamburgerMenu() {
      hamburgerMenu.classList.toggle('hamburger-menu--open');
    }

    function showNav() {
      headerNav.classList.toggle('header__nav--active');
    }

    function animateNavItems() {
      headerNavItems.forEach((item, index) => {
        if (item.style.animation) {
          item.style.animation = '';
        } else {
          item.style.animation = `fadeInRight 1s ease forwards ${index / 7}s`;
        }
      });
    }

    function disableScroll() {
      document.body.classList.toggle('disable-scroll');
    }

    function toggleNav() {
      openHamburgerMenu();
      showNav();
      animateNavItems();
      disableScroll();
    }
    hamburgerMenu.addEventListener('click', toggleNav);
  }, []);

  return (
    <>
      <NavBar>
        <div className="header__content-wrapper">
          <Link to="/">
            <img className="header__logo" src={engine} alt="logo meccanico" />
          </Link>

          <button
            aria-label="menu button"
            className="hamburger-menu header__hamburger-menu"
          >
            <span
              aria-hidden="true"
              className="hamburger-menu__bar hamburger-menu__bar--top"
            ></span>
            <span
              aria-hidden="true"
              className="hamburger-menu__bar hamburger-menu__bar--middle"
            ></span>
            <span
              aria-hidden="true"
              className="hamburger-menu__bar hamburger-menu__bar--bottom"
            ></span>
          </button>

          <nav className="header__nav">
            <ul className="header__list">
              <li>
                <Link className="header__link" to="/projects">
                  projects
                </Link>
              </li>
              <li>
                <Link className="header__link" to="/about">
                  about
                </Link>
              </li>

              <li className="header__link">
                <span
                  role="button"
                  id="dark-mode-button"
                >
                  {typeof window !== 'undefined' &&
                  localStorage.getItem('theme') === 'dark'
                    ? '☀️'
                    : '🌙'}
                    //this is another article boy
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </NavBar>
    </>
  );
}


```

And this ladies and gentlemans was a copy and pasted piece of code, you might notice it was wrote using a simple HTML CSS approach, as I usually do I stick everything inside a `useEffect` function to make sure the components loads with those properties. Be carefull with that copy and paste there 😉. Here is the CSS instead, and we are using the BEM convention, you know it's all part of the game... be ready.

```

const NavBar = styled.header`
  position: relative;
  z-index: 3;
  padding: 0 1.5rem;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  border-bottom: 0.1rem solid whitesmoke;

  .header {
    @media only screen and (min-width: 800px) {
      padding: 0 5rem;
    }

    &__content-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      max-width: 1105px;
      height: 4rem;
      margin: 0 auto;
    }

    &__logo {
      margin: 6px auto auto 0;
      width: 4.8rem;
    }

    &__hamburger-menu {
      @media only screen and (min-width: 800px) {
        display: none;
      }
    }

    &__nav {
      position: absolute;
      z-index: 2;
      top: 4rem;
      left: -1.5rem;
      width: 100vw;
      height: 0;

      @media only screen and (min-width: 800px) {
        position: static;
        transform: translate(0);
        z-index: initial;
        width: initial;
        height: initial;
        padding-top: 0;
        background: white;
        opacity: 1;
        margin-left: auto;
      }

      &--active {
        .header__list {
          z-index: 5;
        }
        @media only screen and (max-width: 800px) {
          z-index: 5;
          transform: translate(0);
          transition: all 0.3s ease-out;
          height: calc(20rem - 5rem);
          background: url('../assets/bg-pattern-mobile-nav.svg') white;
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: contain;
          box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
          border-bottom: 0.1rem solid whitesmoke;
        }
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      padding: 0;

      & > * {
        opacity: 0;
      }

      @media only screen and (min-width: 800px) {
        flex-direction: row;
        align-self: right;

        & > * {
          opacity: 1;
        }
      }
    }

    &__link {
      display: inline-block;
      margin-bottom: 1.5rem;
      transition: all 0.2s;
      text-decoration: none;
      text-transform: capitalize;
      color: black;
      font-weight: bolder;
      font-size: 1.1rem;

      &:active {
        transform: scale(1.1);
      }

      @media only screen and (min-width: 800px) {
        margin-right: 3.5rem;
        margin-bottom: 0;

        &:active {
          transform: initial;
        }
      }
    }
  }

  .hamburger-menu {
    border: 2px solid var(--color-very-dark-violet);
    padding: 9px 4.5px;
    background-color: white;
    cursor: pointer;
    outline: none;
    margin-left: auto;

    &__bar {
      display: block;
      width: 2rem;
      height: 2px;
      background-color: var(--color-very-dark-violet);
      transition: all 0.3s;

      &:not(:last-child) {
        margin-bottom: 3px;
      }
    }
  }

  .hamburger-menu--open .hamburger-menu__bar--top {
    transform: rotate(45deg) translate(3px, 4px);
  }

  .hamburger-menu--open .hamburger-menu__bar--middle {
    opacity: 0;
  }

  .hamburger-menu--open .hamburger-menu__bar--bottom {
    transform: rotate(-45deg) translate(3px, -4px);
  }


  @keyframes fadeInRight {
    from {
      -webkit-transform: translateX(5rem);
      transform: translateX(5rem);
      opacity: 0;
    }
    to {
      -webkit-transform: translate(0);
      transform: translate(0);
      opacity: 1;
    }
  }

  .disable-scroll {
    overflow-y: hidden;

    @media only screen and (min-width: 800px) {
      overflow-y: initial;
    }
  }


    &__heading {
      margin-bottom: 4rem;
      max-width: 44rem;
      text-align: center;

      @media only screen and (min-width: 800px) {
        text-align: start;
        margin-bottom: 0;
      }

      @media only screen and (min-width: 1000px) {
        max-width: 60rem;
      }
    }

    &__btn {
      position: relative;
      z-index: 1;
    }
  }


  .disable-scroll {
    overflow-y: hidden;
    position: relative;
    @media only screen and (min-width: 800px) {
      overflow-y: initial;
    }
  }
`;

```

A wild ride wasn't it, plus you have a little bit of scaling effect when you click on the link. Because of the copying and pasting situation I tried to make one styled component and wrap everything inside it. If something is not working you're a bit closer to a solution now anyway 😎
