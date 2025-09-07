import React, { useState, useEffect } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onAddToCart, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    console.log("🖼️ Image URL:", product.image);
    console.log("📁 Full URL:", window.location.origin + product.image);
  }, [product]);

  if (loading) {
    return (
      <div className={styles.productCard} aria-hidden="true">
        <Skeleton type="image" />
        <div className={styles.productInfo}>
          <Skeleton type="text" width="80%" />
          <Skeleton type="text" width="60%" />
          <Skeleton type="text" width="40%" />
          <div className={styles.productActions}>
            <Skeleton type="button" />
          </div>
        </div>
      </div>
    );
  }

  const handleImageLoad = () => {
    console.log("✅ Image loaded successfully:", product.image);
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = (e) => {
    console.error(
      "❌ IMAGE LOAD ERROR:",
      window.location.origin + product.image
    );
    console.error("Error event:", e);
    setImageError(true);
    setImageLoaded(true);
  };

  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.productRatingStar} ${
            i < product.rating ? styles.filled : ""
          }`}
          aria-hidden="true"
        >
          ★
        </span>
      );
    }
    return (
      <div
        className={styles.productRating}
        aria-label={`Classificação: ${product.rating} estrelas de 5`}
      >
        {stars}
        <span className={styles.srOnly}>{product.rating} estrelas de 5</span>
      </div>
    );
  };

  const renderTag = () => {
    if (!product.tag) return null;

    const tagClass =
      product.tag === "Novo"
        ? styles.productTagNew
        : product.tag === "Promo"
        ? styles.productTagPromo
        : product.tag === "Coleção"
        ? styles.productTagCollection
        : product.tag === "Clássico"
        ? styles.productTagClassic
        : product.tag === "Remaster"
        ? styles.productTagRemaster
        : product.tag === "DLC"
        ? styles.productTagDLC
        : styles.productTag;

    return <span className={tagClass}>{product.tag}</span>;
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        {!imageLoaded && !imageError && <Skeleton type="image" />}

        {imageError ? (
          <div
            className={styles.productImagePlaceholder}
            aria-label={`Imagem não disponível para ${product.title}`}
          >
            ⚔️
          </div>
        ) : (
          <img
            src={window.location.origin + product.image}
            alt={`Capa do jogo ${product.title}`}
            className={styles.productImage}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productTitle} title={product.title}>
          {product.title}
        </h3>

        <div className={styles.productPrice}>R$ {product.price.toFixed(2)}</div>

        {renderRating()}
        {renderTag()}

        <div className={styles.productActions}>
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
