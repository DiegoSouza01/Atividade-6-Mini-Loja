import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  background-color: ${(props) => props.theme.surface};
  box-shadow: ${(props) => props.theme.shadow.sm};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: ${(props) => props.theme.transition};
  border-bottom: 2px solid ${(props) => props.theme.primary};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  font-family: "Arial Rounded MT Bold", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  transition: ${(props) => props.theme.transition};
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(138, 43, 226, 0.1);
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.primary};
    outline-offset: 2px;
  }
`;

const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  transition: ${(props) => props.theme.transition};
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(138, 43, 226, 0.1);
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.primary};
    outline-offset: 2px;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${(props) => props.theme.error};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  border: 1px solid white;
`;

const Navbar = ({ theme, toggleTheme, cartCount }) => {
  return (
    <Nav>
      <Logo>🐉 Spyro's Treasure</Logo>
      <Actions>
        <ThemeButton
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${
            theme === "light" ? "escuro" : "claro"
          }`}
        >
          {theme === "light" ? "🌙" : "✨"}
        </ThemeButton>
        <CartButton aria-label={`Carrinho de compras com ${cartCount} itens`}>
          💎
          {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
        </CartButton>
      </Actions>
    </Nav>
  );
};

export default Navbar;
