// src/App.jsx - CORRIGIDO
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleSelector from "./StyleSelector";
import ProductsPage from "./01-css-global/pages/Home";
import ProductsPageModules from "./02-css-modules/pages/Home";
import ProductsPageTailwind from "./03-tailwind/pages/Home";
import ProductsPageStyled from "./04-styled-components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StyleSelector />} />
          <Route path="/01-css-global" element={<ProductsPage />} />
          <Route path="/02-css-modules" element={<ProductsPageModules />} />
          <Route path="/03-tailwind" element={<ProductsPageTailwind />} />
          <Route
            path="/04-styled-components"
            element={<ProductsPageStyled />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
