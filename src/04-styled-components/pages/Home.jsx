import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "./data";
import { lightTheme, darkTheme } from "./theme";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.2s ease, color 0.2s ease;
  padding-top: 70px; /* Espaço para a navbar fixa */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.lg};
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

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
  font-family: "Arial Rounded MT Bold", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
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

    document.body.style.backgroundColor = currentTheme.background;
    document.body.style.color = currentTheme.text;
    document.body.style.transition = "all 0.2s ease-in-out";
  }, [theme, currentTheme]);

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
      <MainContainer>
        <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />

        <Container>
          <PageTitle> Spyro's Treasure Collection</PageTitle>

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
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
