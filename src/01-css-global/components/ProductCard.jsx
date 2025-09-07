import React, { useState } from "react";
import Button from "./Button";
// A importação do OptimizedImage não é mais necessária

const ProductCard = ({ product, onAddToCart, loading = false }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);

    setTimeout(() => {
      onAddToCart(product);
      setIsAdding(false);
    }, 1000);
  };

  const renderRating = () => {
    const stars = [];
    const ratingValue = Number(product.rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`product-rating-star ${i < ratingValue ? "filled" : ""}`}
          aria-hidden="true"
        >
          ★
        </span>
      );
    }
    return <div className="product-rating">{stars}</div>;
  };

  const renderTag = () => {
    if (!product.tag) return null;
    return (
      <span className={`product-tag ${product.tag.toLowerCase()}`}>
        {product.tag}
      </span>
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.img} // Usa a propriedade 'img' do data.js
          alt={`Capa do jogo ${product.title}`}
          className="product-image"
          loading="lazy"
        />
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
            onClick={handleAddToCart}
            loading={isAdding}
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
