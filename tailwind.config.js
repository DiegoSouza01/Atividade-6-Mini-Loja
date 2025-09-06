/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Tema Crash Bandicoot - Cores oficiais
        crash: {
          // Laranjas (cores principais do Crash)
          orange: {
            50: "#FFF3E0",
            100: "#FFE0B2",
            200: "#FFCC80",
            300: "#FFB74D",
            400: "#FFA726",
            500: "#FF9800", // Laranja principal
            600: "#FB8C00",
            700: "#F57C00",
            800: "#EF6C00",
            900: "#E65100",
          },
          // Azuis (cores do Coco e elementos aquáticos)
          blue: {
            50: "#E3F2FD",
            100: "#BBDEFB",
            200: "#90CAF9",
            300: "#64B5F6",
            400: "#42A5F5",
            500: "#2196F3",
            600: "#1E88E5",
            700: "#1976D2",
            800: "#1565C0",
            900: "#0D47A1",
          },
          // Verdes (natureza da ilha Wumpa)
          green: {
            50: "#E8F5E9",
            100: "#C8E6C9",
            200: "#A5D6A7",
            300: "#81C784",
            400: "#66BB6A",
            500: "#4CAF50",
            600: "#43A047",
            700: "#388E3C",
            800: "#2E7D32",
            900: "#1B5E20",
          },
          // Marrons (terra e troncos)
          brown: {
            50: "#EFEBE9",
            100: "#D7CCC8",
            200: "#BCAAA4",
            300: "#A1887F",
            400: "#8D6E63",
            500: "#795548",
            600: "#6D4C41",
            700: "#5D4037",
            800: "#4E342E",
            900: "#3E2723",
          },
          // Roxos (elementos mágicos e frutas Wumpa)
          purple: {
            50: "#F3E5F5",
            100: "#E1BEE7",
            200: "#CE93D8",
            300: "#BA68C8",
            400: "#AB47BC",
            500: "#9C27B0",
            600: "#8E24AA",
            700: "#7B1FA2",
            800: "#6A1B9A",
            900: "#4A148C",
          },
          // Cores específicas do tema
          primary: "#FF9800", // Laranja Crash
          secondary: "#2196F3", // Azul Coco
          accent: "#4CAF50", // Verde natureza
          background: "#FFF8E1", // Bege claro (areia)
          surface: "#FFFFFF", // Branco
          text: "#3E2723", // Marrom escuro
          error: "#F44336", // Vermelho
          success: "#4CAF50", // Verde
          warning: "#FFC107", // Amarelo
          rating: "#FF9800", // Laranja para estrelas
        },
      },
      backgroundColor: {
        "crash-sand": "#FFF8E1", // Cor de areia
        "crash-sky": "#E3F2FD", // Azul céu
        "crash-jungle": "#E8F5E9", // Verde selva
      },
      textColor: {
        "crash-dark": "#3E2723", // Marrom escuro
        "crash-orange": "#FF9800", // Laranja
      },
      borderColor: {
        "crash-border": "#FFCC80", // Laranja claro para bordas
      },
    },
  },
  plugins: [],
};
