import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import WSF from "./Pages/WSF";
import { useState, useEffect } from "react";
import WSF_PRODUCTS from "./Pages/WSF_PRODUCTS";
import Exsol from "./Pages/Exsol";
import IndustrialChemicals from "./Pages/IndustrialChemicals";
import B2B from "./Pages/B2B";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navbar>
            <Home windowSize={windowSize} />
          </Navbar>
        }
      />
      <Route
        path="/b2b"
        element={
          <Navbar isChangeNavBg={true}>
            <B2B windowSize={windowSize} />
          </Navbar>
        }
      />
      <Route
        path="/about"
        element={
          <Navbar>
            <Home windowSize={windowSize} />
          </Navbar>
        }
      />
      <Route
        path="/wsf"
        element={
          <Navbar>
            <WSF windowSize={windowSize} />
          </Navbar>
        }
      />
      <Route
        path="/industrial-chemicals"
        element={
          <Navbar>
            <IndustrialChemicals windowSize={windowSize} />
          </Navbar>
        }
      />
      <Route
        path="/wsf/b2b/products"
        element={
          <Navbar isChangeNavBg={true}>
            <WSF_PRODUCTS windowSize={windowSize} />
          </Navbar>
        }
      />
      <Route
        path="/wsf/b2c/exsol-fertilizers"
        element={
          <Navbar margin="70px 0 0 0" isChangeNavBg={true}>
            <Exsol windowSize={windowSize} />
          </Navbar>
        }
      />
    </Routes>
  );
}

export default App;
