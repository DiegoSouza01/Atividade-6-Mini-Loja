import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

// Animações
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Estilos
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
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.$loaded ? 1 : 0)};
  animation: ${(props) =>
    props.$loaded
      ? css`
          ${fadeIn} 0.5s ease-in-out
        `
      : "none"};
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
  color: ${(props) =>
    props.$filled ? props.theme.rating : props.theme.border};
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
        return css`
          background-color: ${props.theme.success};
          color: white;
        `;
      case "Promo":
        return css`
          background-color: ${props.theme.warning};
          color: white;
        `;
      case "Clássico":
        return css`
          background-color: ${props.theme.secondary};
          color: white;
        `;
      case "Remaster":
        return css`
          background-color: ${props.theme.accent};
          color: black;
        `;
      case "Coleção":
        return css`
          background-color: ${props.theme.primary};
          color: white;
        `;
      case "Aventura":
        return css`
          background-color: #ff6b8b;
          color: white;
        `;
      default:
        return css`
          background-color: ${props.theme.textSecondary};
          color: white;
        `;
    }
  }}
`;

const Actions = styled.div`
  margin-top: auto;
  padding-top: ${(props) => props.theme.spacing.md};
  position: relative;
`;

const SuccessAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  animation: ${fadeInOut} 1s ease-in-out;
  z-index: 10;
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid ${(props) => props.theme.background};
  border-top: 3px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  animation: ${keyframes`
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  `} 1s linear infinite;
`;

const ProductCard = ({ product, onAddToCart, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const imgRef = useRef(null);

  // Efeito simplificado para carregamento de imagens
  useEffect(() => {
    if (!product.image) {
      setImageError(true);
      return;
    }

    // Timeout para fallback se a imagem demorar muito
    const timeout = setTimeout(() => {
      if (!imageLoaded && !imageError) {
        setImageError(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [product.image, imageLoaded, imageError]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
    console.error(`Erro ao carregar imagem: ${product.image}`);
  };

  const handleAddToCart = async () => {
    setAddingToCart(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    onAddToCart(product);
    setAddingToCart(false);
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 1500);
  };

  const renderRating = () => {
    return (
      <Rating aria-label={`Classificação: ${product.rating} estrelas de 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} $filled={i < product.rating}>
            ★
          </Star>
        ))}
      </Rating>
    );
  };

  const renderTag = () => {
    if (!product.tag) return null;
    return <Tag type={product.tag}>{product.tag}</Tag>;
  };

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

  return (
    <Card>
      <ImageContainer>
        {!imageLoaded && !imageError && (
          <>
            <Skeleton type="image" />
            <LoadingSpinner />
          </>
        )}

        {imageError ? (
          <Placeholder
            aria-label={`Imagem não disponível para ${product.title}`}
          >
            🐉
          </Placeholder>
        ) : (
          <Image
            ref={imgRef}
            src={product.image}
            alt={`Capa do jogo ${product.title}`}
            $loaded={imageLoaded}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
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
            loading={addingToCart}
            onClick={handleAddToCart}
            disabled={addingToCart || showSuccess}
            aria-label={`Adicionar ${product.title} ao carrinho`}
          >
            {showSuccess ? "Adicionado!" : "Adicionar ao Carrinho"}
          </Button>

          {showSuccess && <SuccessAnimation>✅</SuccessAnimation>}
        </Actions>
      </Info>
    </Card>
  );
};

export default ProductCard;
