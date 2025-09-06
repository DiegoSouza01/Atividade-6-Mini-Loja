import React from "react";

const Button = ({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full disabled:opacity-60 disabled:cursor-not-allowed";

  const variantClasses = {
    solid:
      "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500 border border-orange-500",
    outline:
      "bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500",
    ghost:
      "bg-transparent text-orange-500 hover:bg-orange-100 focus:ring-orange-500 border border-transparent",
  };

  const loadingClasses = loading ? "opacity-70 cursor-wait" : "";

  const className = `${baseClasses} ${variantClasses[variant]} ${loadingClasses}`;

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
