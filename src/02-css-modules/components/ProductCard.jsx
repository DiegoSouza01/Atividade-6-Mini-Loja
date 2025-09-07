import React from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  product,
  onAddToCart,
  loading = false,
  isAddingToCart,
}) => {
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

    let tagClass = styles.productTag;

    switch (product.tag) {
      case "Novo":
        tagClass = styles.productTagNew;
        break;
      case "Promo":
        tagClass = styles.productTagPromo;
        break;
      case "Promoção":
        tagClass = styles.productTagPromocao;
        break;
      case "Coleção":
        tagClass = styles.productTagCollection;
        break;
      case "Clássico":
        tagClass = styles.productTagClassic;
        break;
      case "Remake":
        tagClass = styles.productTagRemake;
        break;
      case "Remaster":
        tagClass = styles.productTagRemaster;
        break;
      case "DLC":
        tagClass = styles.productTagDLC;
        break;
      default:
        tagClass = styles.productTag;
    }

    return <span className={tagClass}>{product.tag}</span>;
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={`Capa do jogo ${product.title}`}
          className={styles.productImage}
          loading="lazy"
        />
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
            loading={isAddingToCart}
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
