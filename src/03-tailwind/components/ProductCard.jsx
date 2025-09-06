import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
// import styles from "./ProductCard.module.css"; <-- Remova esta linha

const ProductCard = ({ product, onAddToCart, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <div
        className="bg-white rounded-lg shadow-md p-4 animate-pulse"
        aria-hidden="true"
      >
        <Skeleton type="image" />
        <div className="mt-4">
          <Skeleton type="text" width="80%" />
          <Skeleton type="text" width="60%" />
          <Skeleton type="text" width="40%" />
          <div className="mt-4">
            <Skeleton type="button" />
          </div>
        </div>
      </div>
    );
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const renderRating = () => {
    return (
      <div
        className="flex gap-1"
        aria-label={`Classificação: ${product.rating} estrelas de 5`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= product.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <span className="sr-only">{product.rating} estrelas de 5</span>
      </div>
    );
  };

  const renderTag = () => {
    if (!product.tag) return null;

    const tagStyles = {
      Novo: "bg-green-500 text-white",
      Promo: "bg-red-500 text-white",
      Clássico: "bg-blue-500 text-white",
      Party: "bg-purple-500 text-white",
      Coleção: "bg-orange-500 text-white",
      Remaster: "bg-cyan-500 text-white",
    };

    return (
      <span
        className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold ${
          tagStyles[product.tag] || "bg-gray-500 text-white"
        }`}
      >
        {product.tag}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full relative transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-orange-500 focus-within:outline-none">
      <div className="w-full aspect-square relative overflow-hidden">
        {!imageLoaded && !imageError && <Skeleton type="image" />}
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            ⚔️
          </div>
        ) : (
          <img
            src={product.image}
            alt={`Capa do jogo ${product.title}`}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3
            className="text-lg font-bold text-gray-800 mb-1 truncate"
            title={product.title}
          >
            {product.title}
          </h3>
          <div className="text-xl font-bold text-gray-900 mb-2">
            R$ {product.price.toFixed(2)}
          </div>
          {renderRating()}
          {renderTag()}
        </div>
        <div className="mt-4">
          <Button
            onClick={() => onAddToCart(product)}
            aria-label={`Adicionar ${
              product.title
            } ao carrinho por R$ ${product.price.toFixed(2)}`}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
