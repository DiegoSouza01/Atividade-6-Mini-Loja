// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleSelector from "./StyleSelector";
import HomePage from "./01-css-global/pages/Home";
import HomeModules from "./02-css-modules/pages/Home";
import HomeTailwind from "./03-tailwind/pages/Home";
import HomeStyled from "./04-styled-components/pages/Home";

function App() {
  const [activeStyle, setActiveStyle] = useState("css-global");

  return (
    <Router>
      <div className="App">
        {}
        <div className="main-content-wrapper">
          <StyleSelector
            activeStyle={activeStyle}
            onStyleChange={setActiveStyle}
          />
          <Routes>
            <Route path="/01-css-global" element={<HomePage />} />
            <Route path="/02-css-modules" element={<HomeModules />} />
            <Route path="/03-tailwind" element={<HomeTailwind />} />
            <Route path="/04-styled-components" element={<HomeStyled />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
