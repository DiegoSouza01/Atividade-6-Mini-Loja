export const lightTheme = {
  // Cores do tema Spyro (claro)
  primary: "#8A2BE2", // Roxo - cor do Spyro
  secondary: "#FF6B8B", // Rosa
  accent: "#00CED1", // Ciano
  background: "#F0F8FF", // Azul claro
  surface: "#FFFFFF",
  text: "#2C3E50",
  textSecondary: "#7F8C8D",
  border: "#DDA0DD", // Ameixa claro
  rating: "#FFD700", // Ouro
  success: "#27AE60",
  warning: "#F39C12",
  error: "#E74C3C",

  // Espaçamentos
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  // Bordas
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
  },

  // Sombras
  shadow: {
    sm: "0 1px 3px rgba(138, 43, 226, 0.12), 0 1px 2px rgba(138, 43, 226, 0.24)",
    md: "0 3px 6px rgba(138, 43, 226, 0.16), 0 3px 6px rgba(138, 43, 226, 0.23)",
    lg: "0 10px 20px rgba(138, 43, 226, 0.19), 0 6px 6px rgba(138, 43, 226, 0.23)",
  },

  // Transições
  transition: "all 0.2s ease-in-out",
};

export const darkTheme = {
  // Cores do tema Spyro (escuro)
  primary: "#9370DB", // Roxo médio
  secondary: "#FF69B4", // Rosa quente
  accent: "#20B2AA", // Verde-azulado claro
  background: "#1A1A2E", // Azul muito escuro
  surface: "#16213E",
  text: "#E6E6E6",
  textSecondary: "#BDC3C7",
  border: "#6A5ACD", // Ameixa
  rating: "#FFD700",
  success: "#2ECC71",
  warning: "#F39C12",
  error: "#E74C3C",

  // Mesmos espaçamentos, bordas e transições
  spacing: { ...lightTheme.spacing },
  radius: { ...lightTheme.radius },
  transition: lightTheme.transition,

  // Sombras ajustadas para modo escuro
  shadow: {
    sm: "0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)",
    md: "0 3px 6px rgba(0,0,0,0.6), 0 3px 6px rgba(0,0,0,0.5)",
    lg: "0 10px 20px rgba(0,0,0,0.7), 0 6px 6px rgba(0,0,0,0.6)",
  },
};
