import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

export default function BigWelcomeBanner() {
  const [cursorOn, setCursorOn] = useState(true);

  return (
    <>
      <div className="big-welcome-banner-container">
        <div className="hi-there">
          <em>
            <ReactTyped
              strings={["Hello there!\n", "And welcome to my page!"]}
              typeSpeed={80}
            />
          </em>
        </div>
      </div>
    </>
  );
}
