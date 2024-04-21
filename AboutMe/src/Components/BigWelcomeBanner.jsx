import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

import html from "../Images/html.png";
import css from "../Images/css.png";
import react from "../Images/react.png";
import javascript from "../Images/javascript.png";

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
          />
          <ReactTyped
            strings={[
              "proggrammer!\n",
              "progammer!\n",
              "programer!\n",
              "coder!",
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
          specializations in HTML, JavaScript, CSS, Node.js, SQL, Test-Driven
          Development, and React, but also experience with React Native and
          MongoDB.
        </div>
      </div>
      <div className="language-logos-container">
        <div className="language-logos-container-top">
          <div className="html">
            <img src={html} className="html" />
          </div>
          <div className="css">
            <img src={css} className="css" />
          </div>
          <div className="javascript">
            <img src={javascript} className="javascript" />
          </div>
        </div>
        <div className="language-logos-container-mid">
          <div className="html">1</div>
          <div className="css">2</div>
          <div className="javascript">3</div>
        </div>
        <div className="language-logos-container-bottom">
          <div className="html">1</div>
          <div className="css">2</div>
          <div className="javascript">3</div>
        </div>
      </div>
    </div>
  );
}
