import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleSelector from "./StyleSelector";

// Importa os componentes Home de cada diretório
import CssGlobal from "./01-css-global/pages/Home";
import CssModules from "./02-css-modules/pages/Home";
import Tailwind from "./03-tailwind/pages/Home";
import StyledComponents from "./04-styled-components/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <StyleSelector />
        <Routes>
          <Route path="/" element={<CssGlobal />} />
          <Route path="/01-css-global" element={<CssGlobal />} />
          <Route path="/02-css-modules" element={<CssModules />} />
          <Route path="/03-tailwind" element={<Tailwind />} />
          <Route path="/04-styled-components" element={<StyledComponents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
