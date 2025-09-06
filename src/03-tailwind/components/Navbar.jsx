import React, { useState, useEffect } from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-crash-sand dark:bg-crash-brown-800 shadow-md dark:shadow-crash-brown-900 transition-colors duration-200 border-b-2 border-crash-orange-300">
      <div className="text-2xl font-bold text-crash-primary dark:text-crash-orange-400 flex items-center gap-2">
        <span className="text-3xl">🎮</span>
        Crash Store
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="text-2xl text-crash-brown-700 dark:text-crash-orange-200 hover:text-crash-primary dark:hover:text-crash-orange-400 transition-colors duration-200 p-2 rounded-lg hover:bg-crash-orange-100 dark:hover:bg-crash-brown-700"
          aria-label="Alternar tema"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          onClick={onCartClick}
          className="relative text-2xl text-crash-brown-700 dark:text-crash-orange-200 hover:text-crash-primary dark:hover:text-crash-orange-400 transition-colors duration-200 p-2 rounded-lg hover:bg-crash-orange-100 dark:hover:bg-crash-brown-700"
        >
          <span className="text-3xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-crash-error text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
