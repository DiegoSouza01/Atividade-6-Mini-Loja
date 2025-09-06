import React from "react";
import styled from "styled-components";

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
        return `
          background-color: ${props.theme.primary};
          color: white;
          border-color: ${props.theme.primary};
          
          &:hover:not(:disabled) {
            background-color: ${props.theme.secondary};
            border-color: ${props.theme.secondary};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          border-color: ${props.theme.primary};
          color: ${props.theme.primary};
          
          &:hover:not(:disabled) {
            background-color: ${props.theme.primary};
            color: white;
          }
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${props.theme.primary};
          border-color: transparent;
          
          &:hover:not(:disabled) {
            background-color: rgba(138, 43, 226, 0.1);
          }
        `;
      default:
        return `
          background-color: ${props.theme.primary};
          color: white;
        `;
    }
  }}

  ${(props) =>
    props.$loading &&
    `
    opacity: 0.7;
    cursor: wait;
  `}
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
      {loading ? "Carregando..." : children}
    </StyledButton>
  );
};

export default Button;
