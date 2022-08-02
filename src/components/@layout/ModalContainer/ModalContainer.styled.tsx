import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.HIGHEST};
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  transition: opacity 1s;
  background-color: rgba(86, 86, 86, 0.5);

  ${({ isOpen }) =>
    isOpen
      ? `
      opacity: 1;
  `
      : `
      opacity: 0;
      z-index: ${Z_INDEX.UNDER_ROOT}
  `}
`;

export const Dialog = styled.div<{ isOpen: boolean }>`
  position: relative;
  text-align: center;
  max-width: 70%;
  width: 70%;
  transition: transform 1s;
  background: ${theme.colors.white};
  padding: 40px 14px 13px;

  ${({ isOpen }) =>
    isOpen
      ? `
    transform: scale(100%);
  `
      : `
    transform: scale(0%);
  `}
`;

export const Body = styled.div`
  ${theme.fonts.Medium02};
  color: ${theme.colors.black};
`;

export const Foot = styled.div`
  display: flex;
  margin-top: 27px;
`;

export const CloseButton = styled.button`
  ${theme.fonts.Bold05};
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  width: 100%;
  height: 44px;
  border-radius: 44px;
`;
