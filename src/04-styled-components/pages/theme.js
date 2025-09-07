export const lightTheme = {
  primary: "#8A2BE2",
  secondary: "#FF6B8B", 
  accent: "#00CED1",
  background: "#F0F8FF", 
  surface: "#FFFFFF",
  text: "#2C3E50",
  textSecondary: "#7F8C8D",
  border: "#DDA0DD", 
  rating: "#FFD700", 
  success: "#27AE60",
  warning: "#F39C12",
  error: "#E74C3C",

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
  },

  shadow: {
    sm: "0 1px 3px rgba(138, 43, 226, 0.12), 0 1px 2px rgba(138, 43, 226, 0.24)",
    md: "0 3px 6px rgba(138, 43, 226, 0.16), 0 3px 6px rgba(138, 43, 226, 0.23)",
    lg: "0 10px 20px rgba(138, 43, 226, 0.19), 0 6px 6px rgba(138, 43, 226, 0.23)",
  },

  transition: "all 0.2s ease-in-out",
};

export const darkTheme = {
  primary: "#9370DB", 
  secondary: "#FF69B4",
  accent: "#20B2AA", 
  background: "#1A1A2E", 
  surface: "#16213E",
  text: "#E6E6E6",
  textSecondary: "#BDC3C7",
  border: "#6A5ACD",
  rating: "#FFD700",
  success: "#2ECC71",
  warning: "#F39C12",
  error: "#E74C3C",

  spacing: { ...lightTheme.spacing },
  radius: { ...lightTheme.radius },
  transition: lightTheme.transition,

  shadow: {
    sm: "0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)",
    md: "0 3px 6px rgba(0,0,0,0.6), 0 3px 6px rgba(0,0,0,0.5)",
    lg: "0 10px 20px rgba(0,0,0,0.7), 0 6px 6px rgba(0,0,0,0.6)",
  },
};
