import React from "react";
import NavMenu from "./components/NavMenu";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <NavMenu  navButtonColor="lightyellow"/>
      <div className="home-banner">
        <div className="left">
          <h1 className="home-title">Le comptoir des vins</h1>
          <hr />
          <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet, perspiciatis dolor, maxime libero molestiae autem pariatur soluta, tempora accusantium totam! Commodi ducimus non fuga, veritatis temporibus vero? Quibusdam, commodi.</p>
          <button className="shop-button"><span>BOUTIQUE</span></button>
        </div>
        <div className="right"></div>
      </div>
    </React.Fragment>
  );
};

export default Home;
