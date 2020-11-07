import React from 'react';
import engine from '../../assets/engine.jpg';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Search from '../search/index';
import { device } from '../../styles/Global';
const NavBar = styled.nav`
  height: 5rem;
  display: flex;
  position: static;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  border-bottom: 0.1rem solid whitesmoke;
  @media ${device.tablet} {
    padding: 0 1rem;
  }
  img {
    height: 100%;
    width: 5rem;
    object-fit: cover;
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobileM} {
      display: block;
      width: 4rem;
    }
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 12rem;
    padding: 0;
    @media ${device.mobileM} {
    }
  }
  a {
    text-transform: capitalize;
    text-decoration: none;
    font-weight: bolder;
    color: black;
  }

  #dark-mode-button {
    border: none;
    background: white;
    font-size: bigger;
    cursor: pointer;
    height: 100%;
  }
  input {
    margin-right: 3rem;

    @media ${device.tablet} {
      margin-right: 0.5rem;
    }
    @media ${device.mobileM} {
      display: none;
    }
  }
`;
export default function Header() {
  const searchIndices = [{ name: `Pages`, title: `Pages` }];
  return (
    <>
      <NavBar aria-expanded="true">
        <Link className="logo" to="/">
          <img src={engine} alt="engine" />
        </Link>
        <Search indices={searchIndices} />
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>

          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
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
        </ul>
      </NavBar>
    </>
  );
}
