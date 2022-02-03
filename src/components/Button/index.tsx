import React from "react";
import styled, { DefaultTheme } from "styled-components";

enum ButtonType {
  PRIMARY = "SILVER_DARK",
  SECONDARY = "BLURPLE",
  DANGER = "DANGER",
  SUCCESS = "SEAGREEN",
  WARNING = "ORANGE",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: keyof typeof ButtonType;
}

function getButtonStatus(status: keyof typeof ButtonType, theme: DefaultTheme) {
  return theme[ButtonType[status]];
}

const StyledButton = styled.button<{ status: keyof typeof ButtonType }>`
  display: block;
  background: ${({ status, theme }) => getButtonStatus(status, theme)};
  color: ${({ theme }) => theme.FULL_WHITE};
  cursor: pointer;
`;

const StyledButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  status,
  ...props
}) => {
  return (
    <StyledButton type="button" status={status ?? "PRIMARY"} {...props}>
      <StyledButtonContent>{children}</StyledButtonContent>
    </StyledButton>
  );
};
