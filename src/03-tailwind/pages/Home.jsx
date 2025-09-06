import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";
import { products } from "../data";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("crash-theme");
    return savedTheme || "light";
  });
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("crash-theme", theme);
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
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-200">
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />

      <div className="container mx-auto p-4 pt-[90px] lg:p-6 lg:pt-[100px] max-w-screen-xl">
        <h1 className="text-center text-3xl font-bold mb-6 text-orange-500 dark:text-orange-300">
          🍊 Crash Bandicoot Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 animate-pulse"
                >
                  <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              ))
            : products.map((product) => (
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
