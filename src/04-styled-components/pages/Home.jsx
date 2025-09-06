import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data";
import { lightTheme, darkTheme } from "../styles/theme";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md};
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.lg} 0;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("spyro-theme");
    return savedTheme || "light";
  });

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    localStorage.setItem("spyro-theme", theme);
  }, [theme]);

  useEffect(() => {
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
    <ThemeProvider theme={currentTheme}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
          transition: "background-color 0.2s ease, color 0.2s ease",
        }}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />

        <Container>
          <ProductsGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                loading={loading}
              />
            ))}
          </ProductsGrid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
