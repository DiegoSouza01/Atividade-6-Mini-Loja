import React from "react";

const Navbar = ({ theme, toggleTheme, cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 lg:px-8 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="text-xl font-bold text-orange-500 dark:text-orange-300">
        Crash Bandicoot Shop
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="text-2xl hover:scale-110 transition-transform duration-200"
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${
            theme === "light" ? "escuro" : "claro"
          }`}
          aria-live="polite"
        >
          {theme === "light" ? "⚪" : "⚫"}
        </button>
        <button
          className="relative text-2xl hover:scale-110 transition-transform duration-200"
          aria-label={`Carrinho de compras com ${cartCount} itens`}
        >
          <span role="img" aria-label="Carrinho de compras">
            🛒
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
