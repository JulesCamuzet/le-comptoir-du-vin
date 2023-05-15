import React, { useEffect, useState } from "react";
import "./NosVignerons.css";
import vigneronsData from "./vigneronsData.json";

const data = Object.entries(vigneronsData);

const NosVigneronsBanner = () => {
  const [offset, setOffset] = useState(0);
  const [hideNavIcon, setHideNavIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const listSection = document.querySelector(".nv-list-section");

      setOffset(window.scrollY);
      if (window.scrollY >= listSection.getBoundingClientRect().top + window.innerHeight) {
        setHideNavIcon(true);
      } else {
        setHideNavIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const autoScroll = () => {
    const listSection = document.querySelector(".nv-list-section");
    const listToTop = listSection.getBoundingClientRect().top;
    window.scrollBy(0, listToTop);
  };

  return (
    <React.Fragment>
      <div
        className={
          hideNavIcon ? "nav-icon-background visible" : "nav-background-icon"
        }
      ></div>
      <div className="banner">
        <div
          className="nv-background-container"
          style={{ transform: `translateY(-${offset * 0.5}px)` }}
        ></div>
        <h1 className="nv-title">
          Nos
          <br />
          Vignerons
        </h1>
        <button className="nv-scroll-button" onClick={autoScroll}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="lightyellow"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            />
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
};

const NosVigneronsList = () => {
  return (
    <section className="nv-list-section">
      <div className="nv-list">
        {data.map((regionData, index) => {
          const regionName = regionData[0];
          const vigneronsArr = regionData[1];
          return (
            <NosVigneronsListItem
              key={index}
              regionName={regionName}
              vigneronsArr={vigneronsArr}
            />
          );
        })}
      </div>
    </section>
  );
};

const NosVigneronsListItem = (props) => {
  const regionName = props.regionName;
  const vigneronsArr = props.vigneronsArr;
  const nbVignerons = props.vigneronsArr.length;

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    opened ? setOpened(false) : setOpened(true);
  };

  return (
    <div className="nv-list-item">
      <h2 className="nv-list-item-title" onClick={handleClick}>
        <span>{regionName}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={opened ? "visible" : ""}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </h2>
      <ul
        className="nv-list-item-content"
        style={opened ? { height: `${50 * nbVignerons}px`, borderBottom: "solid black 1px" } : { height: "0px" }}
      >
        {vigneronsArr.map((vigneronName, index) => {
          return <li key={vigneronName}>{vigneronName}</li>;
        })}
      </ul>
    </div>
  );
};

const NosVignerons = () => {
  return (
    <React.Fragment>
      <NosVigneronsBanner />
      <NosVigneronsList />
    </React.Fragment>
  );
};

export default NosVignerons;
