// src/components/StyleSelector.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyleSelector = () => {
  const [activeStyle, setActiveStyle] = useState("css-global");
  const navigate = useNavigate();

  const styles = [
    {
      id: "css-global",
      name: "Final Fantasy (CSS Global)",
      path: "/01-css-global",
    },
    {
      id: "css-modules",
      name: "Dark Souls (CSS Modules)",
      path: "/02-css-modules",
    },
    { id: "tailwind", name: "Crash (Tailwind CSS)", path: "/03-tailwind" },
    {
      id: "styled-components",
      name: "Spyro (Styled Components)",
      path: "/04-styled-components",
    },
  ];

  const handleStyleChange = (styleId, path) => {
    setActiveStyle(styleId);
    navigate(path);
  };

  return (
    <div className="style-selector">
      <h2>Selecione a Abordagem de Estilização</h2>
      <div className="style-buttons">
        {styles.map((style) => (
          <button
            key={style.id}
            className={`style-button ${
              activeStyle === style.id ? "active" : ""
            }`}
            onClick={() => handleStyleChange(style.id, style.path)}
          >
            {style.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
