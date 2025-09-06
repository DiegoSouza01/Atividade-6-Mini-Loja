import React, { useState } from "react";
import CssGlobal from "./01-css-global/pages/Home";
import CssModules from "./02-css-modules/pages/Home";
import Tailwind from "./03-tailwind/pages/Home";
import StyledComponents from "./04-styled-components/pages/Home";
import StyledSelector from "./StyleSelector";

// Adicione "export default" antes da função
export default function App() {
  const [currentView, setCurrentView] = useState("css-global");

  return (
    <div>
      <div style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={() => setCurrentView("css-global")}>FF</button>
        <button onClick={() => setCurrentView("css-modules")}>DS</button>
        <button onClick={() => setCurrentView("tailwind")}>CR</button>
        <button onClick={() => setCurrentView("styled-components")}>SP</button>
      </div>

      {currentView === "css-global" && <CssGlobal />}
      {currentView === "css-modules" && <CssModules />}
      {currentView === "tailwind" && <Tailwind />}
      {currentView === "styled-components" && <StyledComponents />}
    </div>
  );
}
