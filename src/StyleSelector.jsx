import React from "react";
import { useNavigate } from "react-router-dom";

const styles = [
  { id: "css-global", name: "CSS Global", path: "/01-css-global" },
  { id: "css-modules", name: "CSS Modules", path: "/02-css-modules" },
  { id: "tailwind", name: "Tailwind CSS", path: "/03-tailwind" },
  {
    id: "styled-components",
    name: "Styled Components",
    path: "/04-styled-components",
  },
];

const StyleSelector = ({ activeStyle, onStyleChange }) => {
  const navigate = useNavigate();

  const handleStyleChange = (styleId, path) => {
    // Chama a função de callback para atualizar o estado no componente pai
    onStyleChange(styleId);
    // Redireciona para a nova rota
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
