import React from "react";
import AppHeader from "../components/Header";
import backgound from "../assets/Background.png"
import imgBackgound from "../assets/IMGbackground.png"

const AppHome = () => {
  return (
    <div id="homeContent" >
      <div id="banner">
      <img className="background" src={backgound} alt="background" />
        <img className="background imgBackground" src={imgBackgound} alt="landscape" />
        <p id="bannerTxt">"Chez vous, partout et ailleurs"</p>
      </div>
    </div>
  );
};

export default AppHome;