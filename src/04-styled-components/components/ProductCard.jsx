import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

const Card = styled.div`
  background-color: ${(props) => props.theme.surface};
  border-radius: ${(props) => props.theme.radius.lg};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadow.sm};
  transition: ${(props) => props.theme.transition};
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.border};
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadow.md};
    border-color: ${(props) => props.theme.primary};
  }

  &:focus-within {
    outline: 2px solid ${(props) => props.theme.primary};
    outline-offset: 2px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.background} 0%,
    ${(props) => props.theme.surface} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.background} 0%,
    ${(props) => props.theme.surface} 100%
  );
  color: ${(props) => props.theme.textSecondary};
`;

const Info = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8rem;
  color: ${(props) => props.theme.text};
  font-family: "Arial Rounded MT Bold", sans-serif;
  line-height: 1.4;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  font-family: "Arial Rounded MT Bold", sans-serif;
`;

const Rating = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? props.theme.rating : props.theme.border)};
  font-size: 1.1rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.radius.sm};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  align-self: flex-start;

  ${(props) => {
    switch (props.type) {
      case "Novo":
        return `background-color: ${props.theme.success}; color: white;`;
      case "Promo":
        return `background-color: ${props.theme.warning}; color: white;`;
      case "Clássico":
        return `background-color: ${props.theme.secondary}; color: white;`;
      case "Remaster":
        return `background-color: ${props.theme.accent}; color: black;`;
      case "Coleção":
        return `background-color: ${props.theme.primary}; color: white;`;
      case "Aventura":
        return `background-color: #FF6B8B; color: white;`;
      default:
        return `background-color: ${props.theme.textSecondary}; color: white;`;
    }
  }}
`;

const Actions = styled.div`
  margin-top: auto;
  padding-top: ${(props) => props.theme.spacing.md};
`;

const ProductCard = ({ product, onAddToCart, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <Card aria-hidden="true">
        <Skeleton type="image" />
        <Info>
          <Skeleton type="text" width="80%" />
          <Skeleton type="text" width="60%" />
          <Skeleton type="text" width="40%" />
          <Actions>
            <Skeleton type="button" />
          </Actions>
        </Info>
      </Card>
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
        <Star key={i} filled={i < product.rating} aria-hidden="true">
          ★
        </Star>
      );
    }
    return (
      <Rating aria-label={`Classificação: ${product.rating} estrelas de 5`}>
        {stars}
        <span className="sr-only">{product.rating} estrelas de 5</span>
      </Rating>
    );
  };

  const renderTag = () => {
    if (!product.tag) return null;
    return <Tag type={product.tag}>{product.tag}</Tag>;
  };

  return (
    <Card>
      <ImageContainer>
        {!imageLoaded && !imageError && <Skeleton type="image" />}

        {imageError ? (
          <Placeholder
            aria-label={`Imagem não disponível para ${product.title}`}
          >
            🐉
          </Placeholder>
        ) : (
          <Image
            src={product.image}
            alt={`Capa do jogo ${product.title}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}
      </ImageContainer>

      <Info>
        <Title title={product.title}>{product.title}</Title>
        <Price>R$ {product.price.toFixed(2)}</Price>
        {renderRating()}
        {renderTag()}
        <Actions>
          <Button
            variant="solid"
            onClick={() => onAddToCart(product)}
            aria-label={`Adicionar ${
              product.title
            } ao carrinho por R$ ${product.price.toFixed(2)}`}
          >
            Adicionar ao Carrinho
          </Button>
        </Actions>
      </Info>
    </Card>
  );
};

export default ProductCard;
