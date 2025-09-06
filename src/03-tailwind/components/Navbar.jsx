import React from "react";

const Navbar = ({ theme, toggleTheme, cartCount }) => {
  const isDark = theme === "dark";

  return (
    <nav
      className={`sticky top-0 z-50 px-8 py-4 flex justify-between items-center transition-colors duration-200 ${
        isDark
          ? "bg-gray-900 border-b border-orange-600 text-white"
          : "bg-white border-b border-orange-400 text-gray-900 shadow-md"
      }`}
    >
      <div className="text-xl font-bold text-orange-500 font-comic">
        🍊 Crash Emporium
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
            isDark
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-600"
          }`}
          aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <button
          className="relative p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label={`Carrinho com ${cartCount} itens`}
        >
          🛒
          {cartCount > 0 && (
            <span
              className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${
                isDark ? "bg-red-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
