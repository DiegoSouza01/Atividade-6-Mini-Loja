import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data";
import "../styles/theme.css";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("ds-theme");
    return savedTheme || "light";
  });

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingToCartId, setAddingToCartId] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ds-theme", theme);
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
    setAddingToCartId(product.id);

    setTimeout(() => {
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
      setAddingToCartId(null);
    }, 1000);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />

      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div className="productsGrid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              loading={loading}
              isAddingToCart={addingToCartId === product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
