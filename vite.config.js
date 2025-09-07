import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  base: "/",
  server: {
    // Configuração para servir arquivos estáticos corretamente
    middlewareMode: false, // Garante que o Vite sirva arquivos estáticos
  },
  build: {
    assetsDir: "assets", // Diretório de assets na build
  },
});
