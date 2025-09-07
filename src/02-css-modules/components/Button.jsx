import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    loading ? styles.loading : ""
  }`;

  return (
    <button
      className={buttonClass}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? "Adicionando..." : children}
    </button>
  );
};

export default Button;
