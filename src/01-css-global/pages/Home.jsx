import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";
import OptimizedImage from "../components/OptimizedImage"; // Importa o componente de imagem otimizada
import { products } from "../data";
import "../styles/theme.css";
import "../styles/global.css";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Simula carregamento de dados com um atraso de 1.5 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />

      <div className="container">
        <h1 className="main-title">Produtos</h1>
        <div className="hero-banner">
          <OptimizedImage
            src="https://media.generative.io/images/uploaded/image_6cf330.png-2196a39f-4c37-438a-9a7a-910362bf53c4"
            alt="Banner com personagens de Final Fantasy VII Rebirth"
            width="100%"
            height="auto"
          />
        </div>
        <div className="products-grid">
          {loading
            ? // Exibe o skeleton enquanto loading é true
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : // Exibe os produtos quando loading é false
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
