import React from "react";

const Navbar = ({ theme, toggleTheme, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Final Fantasy Shop</div>
      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${
            theme === "light" ? "escuro" : "claro"
          }`}
          aria-live="polite"
        >
          {theme === "light" ? "⚪" : "⚫"}
        </button>
        <button
          className="cart-badge"
          aria-label={`Carrinho de compras com ${cartCount} itens`}
        >
          <span role="img" aria-label="Carrinho de compras">
            🛒
          </span>
          {cartCount > 0 && (
            <span className="cart-badge-count">{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
