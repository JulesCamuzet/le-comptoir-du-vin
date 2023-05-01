import React, { useState } from "react";
import "./NavMenu.css";

const NavMenu = () => {
  const [navOpened, setNavOpened] = useState(false);

  const handleClick = () => {
    navOpened ? setNavOpened(false) : setNavOpened(true);
  };
  const linksTitles = ["Nos vignerons", "Notre histoire", "Nous contacter"];
  return (
    <div className="nav-menu">
      <svg
        onClick={handleClick}
        className={
          navOpened
            ? "open-nav nav-toggle-hidden"
            : "open-nav nav-toggle-visible"
        }
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        onClick={handleClick}
        className={
          navOpened
            ? "close-nav nav-toggle-visible"
            : "close-nav nav-toggle-hidden"
        }
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div className="nav-content">
        <div className="nav-links">
          {linksTitles.map((value, index) => {
            return (
              <div className="nav-link" key={index}>
                <a
                  href="/"
                  style={navOpened ? {transitionDelay: `${1 + index*0.1}s`} : {transitionDelay: `${index*0.1}s`}}
                  className={
                    navOpened
                      ? "nav-link-content visible"
                      : "nav-link-content"
                  }
                >
                  <div className="nav-link-background-container" style={{backgroundImage: `url(${require(`../assets/medias/background-nav-${index+1}.jpg`)})`}}></div>
                  <h2 className="nav-link-text">{value}</h2>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={
          navOpened ? "nav-background visible" : "nav-background"
        }
      ></div>
    </div>
  );
};

export default NavMenu;
