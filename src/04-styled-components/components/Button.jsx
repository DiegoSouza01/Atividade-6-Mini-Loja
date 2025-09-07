import React from "react";
import styled, { keyframes, css } from "styled-components";

// Animação de spinner - CORRIGIDA com css helper
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-right: 8px;
`;

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant", "loading"].includes(prop),
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  border: 2px solid transparent;
  font-size: 0.9rem;
  width: 100%;
  font-family: "Arial Rounded MT Bold", sans-serif;
  position: relative;
  min-height: 38px;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) => {
    switch (props.$variant) {
      case "solid":
        return css`
          background-color: ${props.theme.primary};
          color: white;
          border-color: ${props.theme.primary};

          &:hover:not(:disabled) {
            background-color: ${props.theme.secondary};
            border-color: ${props.theme.secondary};
          }
        `;
      case "outline":
        return css`
          background-color: transparent;
          border-color: ${props.theme.primary};
          color: ${props.theme.primary};

          &:hover:not(:disabled) {
            background-color: ${props.theme.primary};
            color: white;
          }
        `;
      case "ghost":
        return css`
          background-color: transparent;
          color: ${props.theme.primary};
          border-color: transparent;

          &:hover:not(:disabled) {
            background-color: rgba(138, 43, 226, 0.1);
          }
        `;
      default:
        return css`
          background-color: ${props.theme.primary};
          color: white;
        `;
    }
  }}

  ${(props) =>
    props.$loading &&
    css`
      cursor: wait;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
      }

      & > * {
        opacity: 0;
      }
    `}
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: ${(props) => (props.$loading ? 0 : 1)};
  transition: opacity 0.2s ease;
`;

const Button = ({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      disabled={disabled || loading}
      $loading={loading}
      onClick={onClick}
      {...props}
    >
      <ButtonContent $loading={loading}>
        {loading && <Spinner />}
        {children}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;
