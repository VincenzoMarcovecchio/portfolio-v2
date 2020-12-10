import React, { useEffect } from 'react';
import engine from '../../assets/engine.jpg';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Search from '../search/index';

export default function Header() {
  const searchIndices = [{ name: `Pages`, title: `Pages` }];

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
                  onClick={(event) => {
                    const theme =
                      typeof window !== 'undefined' &&
                      localStorage.getItem('theme');

                    if (theme === 'dark') {
                      typeof window !== 'undefined' &&
                        localStorage.removeItem('theme');
                      const link = document.querySelectorAll('#dark-mode');

                      if (link) {
                        link.forEach((el) => el.remove());
                        event.target.textContent = '🌙';
                      }
                    } else {
                      typeof window !== 'undefined' &&
                        localStorage.setItem('theme', 'dark');
                      event.target.textContent = '☀️';
                      const head = document.getElementsByTagName('head')[0];
                      const link = document.createElement('link');
                      link.rel = 'stylesheet';
                      link.id = 'dark-mode';
                      link.href = './dark.css';

                      head.appendChild(link);
                    }
                  }}
                >
                  {typeof window !== 'undefined' &&
                  localStorage.getItem('theme') === 'dark'
                    ? '☀️'
                    : '🌙'}
                </span>
              </li>
              <li>
                <Search indices={searchIndices} />
              </li>
            </ul>
          </nav>
        </div>
      </NavBar>
    </>
  );
}

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

  --color-very-dark-violet: hsl(270, 9%, 17%);
  --color-dark-greyish-violet: hsl(273, 4%, 51%);

  #dark-mode-button {
    cursor: pointer;
  }

  .disable-scroll {
    overflow-y: hidden;
    position: relative;
    @media only screen and (min-width: 800px) {
      overflow-y: initial;
    }
  }
`;
