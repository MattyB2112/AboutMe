import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import BigWelcomeBanner from "./Components/BigWelcomeBanner";

function App() {
  return (
    <>
      <Header />
      <BigWelcomeBanner />
    </>
  );
}

export default App;
