import React from "react";

const Button = ({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  const className = `btn btn-${variant} ${loading ? "loading" : ""}`;

  return (
    <button
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
