import React, { useState } from "react";
import OptimizedImage from "./OptimizedImage";

const ProductCard = ({ product, loading = false, onAddToCart }) => {
  const [adding, setAdding] = useState(false);

  if (loading) {
    return (
      <div className="bg-white dark:bg-crash-brown-800 rounded-lg shadow-md dark:shadow-crash-brown-900 overflow-hidden border-2 border-crash-orange-200 dark:border-crash-brown-600 animate-pulse transition-colors duration-200">
        <div className="w-full h-64 bg-crash-orange-100 dark:bg-crash-brown-600"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-crash-orange-200 dark:bg-crash-brown-500 rounded"></div>
          <div className="h-6 bg-crash-orange-200 dark:bg-crash-brown-500 rounded w-1/2"></div>
          <div className="h-4 bg-crash-orange-200 dark:bg-crash-brown-500 rounded w-1/3"></div>
          <div className="h-10 bg-crash-orange-200 dark:bg-crash-brown-500 rounded"></div>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < rating
            ? "text-crash-warning"
            : "text-crash-orange-200 dark:text-crash-brown-600"
        }
      >
        ⭐
      </span>
    ));
  };

  const getTagClass = (tag) => {
    switch (tag) {
      case "Novo":
        return "bg-crash-success text-white";
      case "Promo":
        return "bg-crash-warning text-crash-brown-900";
      case "Clássico":
        return "bg-crash-purple-500 text-white";
      case "Wumpa":
        return "bg-crash-primary text-white";
      default:
        return "bg-crash-orange-100 dark:bg-crash-brown-600 text-crash-brown-800 dark:text-white";
    }
  };

  const handleAddToCart = async () => {
    setAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    onAddToCart(product);
    setAdding(false);
  };

  return (
    <div className="bg-white dark:bg-crash-brown-800 rounded-lg shadow-md dark:shadow-crash-brown-900 overflow-hidden border-2 border-crash-orange-200 dark:border-crash-brown-600 hover:shadow-lg dark:hover:shadow-crash-brown-700 transition-all duration-200 transform hover:-translate-y-1 hover:scale-105">
      <div className="w-full h-64 relative">
        {product.image ? (
          <OptimizedImage
            src={product.image}
            alt={product.title}
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-crash-orange-50 dark:bg-crash-brown-700 text-5xl">
            🍊
          </div>
        )}
      </div>

      <div className="p-4">
        {product.tag && (
          <span
            className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${getTagClass(
              product.tag
            )} mb-2 inline-block`}
          >
            {product.tag}
          </span>
        )}

        <h3 className="text-lg font-semibold text-crash-dark dark:text-crash-orange-100 mb-2 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex mr-2">{renderStars(product.rating)}</div>
          <span className="text-sm text-crash-brown-600 dark:text-crash-orange-200">
            ({product.rating}/5)
          </span>
        </div>

        <p className="text-xl font-bold text-crash-primary dark:text-crash-orange-400 mb-3">
          🪙 R$ {product.price.toFixed(2)}
        </p>

        <button
          onClick={handleAddToCart}
          disabled={adding}
          className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-crash-primary focus:ring-opacity-50 border-2 ${
            adding
              ? "bg-crash-brown-300 dark:bg-crash-brown-600 text-crash-brown-600 border-crash-brown-300 cursor-not-allowed"
              : "bg-crash-primary hover:bg-crash-orange-600 dark:bg-crash-orange-500 dark:hover:bg-crash-orange-600 text-white border-crash-orange-500 hover:border-crash-orange-600"
          }`}
        >
          {adding ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Adicionando...
            </div>
          ) : (
            "🛒 Adicionar ao Carrinho"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
