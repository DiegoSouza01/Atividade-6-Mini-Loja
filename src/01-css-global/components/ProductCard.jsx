import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

const ProductCard = ({ product, onAddToCart, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <div className="product-card" aria-hidden="true">
        <Skeleton type="image" />
        <div className="product-info">
          <Skeleton type="text" width="80%" />
          <Skeleton type="text" width="60%" />
          <Skeleton type="text" width="40%" />
          <div className="product-actions">
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
          className={`product-rating-star ${
            i < product.rating ? "filled" : ""
          }`}
          aria-hidden="true"
        >
          ★
        </span>
      );
    }
    return (
      <div
        className="product-rating"
        aria-label={`Classificação: ${product.rating} estrelas de 5`}
      >
        {stars}
        <span className="sr-only">{product.rating} estrelas de 5</span>
      </div>
    );
  };

  const renderTag = () => {
    if (!product.tag) return null;

    return (
      <span className={`product-tag product-tag-${product.tag.toLowerCase()}`}>
        {product.tag}
      </span>
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {!imageLoaded && !imageError && <Skeleton type="image" />}

        {imageError ? (
          <div
            className="product-image-placeholder"
            aria-label={`Imagem não disponível para ${product.title}`}
          >
            🎮
          </div>
        ) : (
          <img
            src={product.image}
            alt={`Capa do jogo ${product.title}`}
            className="product-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>

        <div className="product-price">R$ {product.price.toFixed(2)}</div>

        {renderRating()}
        {renderTag()}

        <div className="product-actions">
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
