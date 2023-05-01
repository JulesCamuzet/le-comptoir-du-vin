import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = (props) => {
  const [navOpened, setNavOpened] = useState(false);
  const navLinks = ["/nos-vignerons", "/", "/"];

  const navButtonColor = props.navButtonColor;

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
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={navButtonColor}
        fill="none"
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
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div className="nav-content">
        <div className="nav-social-links">
          <a
            href="/"
            className={
              navOpened ? "nav-social-link visible" : "nav-social-link"
            }
          >
            <img src={require("./../assets/medias/facebook.png")} alt="" />
          </a>
          <a
            href="/"
            className={
              navOpened ? "nav-social-link visible" : "nav-social-link"
            }
          >
            <img src={require("./../assets/medias/instagram.png")} alt="" />
          </a>
        </div>
        <div className="nav-links">
          {linksTitles.map((value, index) => {
            return (
              <div className="nav-link" key={index}>
                <div
                  style={
                    navOpened
                      ? { transitionDelay: `${1 + index * 0.1}s` }
                      : { transitionDelay: `${index * 0.1}s` }
                  }
                  className={
                    navOpened ? "nav-link-content visible" : "nav-link-content"
                  }
                >
                  <Link to={navLinks[index]}>
                    <div
                      className="nav-link-background-container"
                      style={{
                        backgroundImage: `url(${require(`../assets/medias/background-nav-${
                          index + 1
                        }.jpg`)})`,
                      }}
                    ></div>
                    <h2 className="nav-link-text">{value}</h2>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className={navOpened ? "nav-informations visible" : "nav-informations"}>
          <div className="nav-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>05.00.00.00.00</span>
          </div>
          <div className="nav-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>contact@comptoirdesvins.com</span>
          </div>
          <div className="nav-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>6 rue des Arts - 31000, Toulouse</span>
          </div>
        </div>
      </div>
      <div
        className={navOpened ? "nav-background visible" : "nav-background"}
      ></div>
    </div>
  );
};

export default NavMenu;
