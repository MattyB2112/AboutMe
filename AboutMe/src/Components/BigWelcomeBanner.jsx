import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

export default function BigWelcomeBanner() {
  let cursorOn = false;

  return (
    <>
      <div className="big-welcome-banner-container">
        <div className="hi-there">
          <em>
            <ReactTyped
              strings={["Hello there!\n", "I am a &#32"]}
              typeSpeed={50}
              backSpeed={50}
              showCursor={false}
            />
          </em>
          {/* <em>
            <div>{"\n"}</div>
            <ReactTyped
              strings={["I am a &#32\n"]}
              typeSpeed={50}
              backSpeed={180}
              startDelay={1900}
              showCursor={false}
            />
          </em> */}
          <em>
            <ReactTyped
              strings={[
                "proggrammer!\n",
                "progammer!\n",
                "programer!\n",
                "coder!",
              ]}
              typeSpeed={50}
              backSpeed={50}
              startDelay={3000}
              backDelay={500}
              showCursor={true}
            />
          </em>
        </div>
      </div>
    </>
  );
}
