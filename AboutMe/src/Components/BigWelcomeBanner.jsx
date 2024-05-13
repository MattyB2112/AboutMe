import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

import html from "../Images/html.png";
import css from "../Images/css.png";
import react from "../Images/react.png";
import javascript from "../Images/javascript.png";
import node from "../Images/node.png";
import express from "../Images/express.png";
import SQL from "../Images/SQL.png";
import mongodb from "../Images/mongodb.png";
import axios from "../Images/axios.png";

export default function BigWelcomeBanner() {
  let cursorOn = false;

  return (
    <div className="home-container">
      <div className="welcome-banner-container">
        <div className="typed-container">
          <>
            Hi! I'm Matt
            <br />|
          </>

          <ReactTyped
            strings={["I'm a &#32"]}
            typeSpeed={50}
            backSpeed={50}
            showCursor={false}
            startDelay={300}
          />
          <ReactTyped
            strings={[
              "&#32proggrammer!\n",
              "&#32progammer!\n",
              "&#32programer!\n",
              "&#32coder!",
            ]}
            typeSpeed={50}
            backSpeed={50}
            startDelay={700}
            backDelay={500}
            showCursor={true}
          />
        </div>
        <div className="welcome-text">
          Recent graduate of the Northcoders Software Development bootcamp, with
          specializations in HTML, JavaScript, CSS, Node.js, SQL, Axios,
          Express, React, and Test-Driven Development, and also experience with
          React Native and MongoDB.
        </div>
      </div>
      <div className="language-logos-container">
        <div className="language-logos-container-top">
          <img src={html} className="language-logo" />
          <img src={css} className="language-logo" />
          <img src={javascript} className="language-logo" />
        </div>
        <div className="language-logos-container-mid">
          <img src={react} className="language-logo" />
          <img src={node} className="language-logo" />
          <img src={express} className="language-logo" />
        </div>
        <div className="language-logos-container-bottom">
          <img src={SQL} className="language-logo" />
          <img src={mongodb} className="language-logo" />
          <img src={axios} className="language-logo" />
        </div>
      </div>
    </div>
  );
}
