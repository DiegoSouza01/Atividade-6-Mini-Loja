const Button = ({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    "py-2 px-4 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2";

  const variantClasses = {
    solid:
      "bg-orange-500 hover:bg-orange-600 text-white border border-orange-500",
    outline:
      "bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500",
    ghost:
      "bg-transparent text-orange-500 hover:bg-orange-100 border border-transparent",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        loading ? "pointer-events-none opacity-75" : ""
      }`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
