import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

const ProductCard = ({ product, onAddToCart, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200"
        aria-hidden="true"
      >
        <Skeleton type="image" />
        <div className="p-4 flex flex-col gap-2 flex-grow">
          <Skeleton type="text" width="w-3/4" />
          <Skeleton type="text" width="w-1/2" />
          <Skeleton type="text" width="w-1/3" />
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
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${
            i < product.rating ? "text-yellow-400" : "text-gray-300"
          }`}
          aria-hidden="true"
        >
          ★
        </span>
      );
    }
    return (
      <div
        className="flex gap-0.5"
        aria-label={`Classificação: ${product.rating} estrelas de 5`}
      >
        {stars}
        <span className="sr-only">{product.rating} estrelas de 5</span>
      </div>
    );
  };

  const renderTag = () => {
    if (!product.tag) return null;

    const tagColors = {
      Novo: "bg-green-500 text-white",
      Promo: "bg-red-500 text-white",
      Clássico: "bg-blue-500 text-white",
      Remaster: "bg-purple-500 text-white",
      Party: "bg-pink-500 text-white",
      Coleção: "bg-orange-500 text-white",
    };

    return (
      <span
        className={`px-2 py-1 rounded text-xs font-bold uppercase ${
          tagColors[product.tag] || "bg-gray-500 text-white"
        } self-start`}
      >
        {product.tag}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500">
      <div className="relative w-full aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
        )}

        {imageError ? (
          <div
            className="text-4xl"
            aria-label={`Imagem não disponível para ${product.title}`}
          >
            🍊
          </div>
        ) : (
          <img
            src={product.image}
            alt={`Capa do jogo ${product.title}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3
          className="font-semibold text-gray-900 dark:text-white line-clamp-2 min-h-[3rem] leading-tight"
          title={product.title}
        >
          {product.title}
        </h3>

        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
          R$ {product.price.toFixed(2)}
        </div>

        {renderRating()}
        {renderTag()}

        <div className="mt-4">
          <Button
            variant="solid"
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
