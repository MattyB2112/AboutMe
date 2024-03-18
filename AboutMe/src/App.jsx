import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
import "./App.css";
import Header from "./Components/Header";
import BigWelcomeBanner from "./Components/BigWelcomeBanner";
import About from "./Components/About";
import Projects from "./Components/Projects";
import CV from "./Components/CV";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BigWelcomeBanner />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
