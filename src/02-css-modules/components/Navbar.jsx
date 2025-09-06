import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ theme, toggleTheme, cartCount }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Dark Souls Emporium</div>
      <div className={styles.navbarActions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${
            theme === "light" ? "escuro" : "claro"
          }`}
        >
          {theme === "light" ? "🌙" : "🔥"}
        </button>
        <button
          className={styles.cartBadge}
          aria-label={`Carrinho de compras com ${cartCount} itens`}
        >
          ⚔️
          {cartCount > 0 && (
            <span className={styles.cartBadgeCount}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
