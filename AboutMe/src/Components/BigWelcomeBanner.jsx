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
            startDelay={400}
            backDelay={500}
            showCursor={true}
          />
        </div>
        <div className="welcome-text">
          Recent graduate of the Northcoders Software Development bootcamp, with
          specializations in HTML, JavaScript, CSS, Node.js, SQL, Axios,
          Test-Driven Development, and React, and also experienced with React
          Native and MongoDB.
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
        <div className="language-logos-labels-top">
          <div className="language-label">HTML5</div>
          <div className="language-label">CSS3</div>
          <div className="language-label">JavaScript</div>
        </div>
        <div className="language-logos-container-mid">
          <div className="html">
            <img src={react} className="react" />
          </div>
          <div className="css">
            <img src={node} className="node" />
          </div>
          <div className="javascript">
            <img src={express} className="node" />
          </div>
        </div>
        <div className="language-logos-labels-mid">
          <div className="language-label">React.js</div>
          <div className="language-label">Node.js</div>
          <div className="language-label">Express.js</div>
        </div>

        <div className="language-logos-container-bottom">
          <div className="html">
            <img src={SQL} className="node" />
          </div>
          <div className="css">
            <img src={mongodb} className="node" />
          </div>
          <div className="javascript">
            <img src={axios} className="node" />
          </div>
        </div>
        <div className="language-logos-labels-bottom">
          <div className="language-label">SQL</div>
          <div className="language-label">MongoDB</div>
          <div className="language-label">Axios</div>
        </div>
      </div>
    </div>
  );
}
