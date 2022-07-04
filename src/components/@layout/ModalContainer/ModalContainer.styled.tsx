import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";

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
  background-color: rgba(0, 0, 0, 0.5);

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
  display: flex;
  justify-content: center;
  align-items: center;
  
  min-height: 12.5rem;
  max-height: 70%;
  min-width: 12.5rem;
  max-width: 90%;

  transition: transform 1s;
  background-color: white;

  ${({ isOpen }) =>
    isOpen
      ? `
    transform: scale(100%);
  `
      : `
    transform: scale(0%);
  `}
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
`;

export const Body = styled.div``;

export const CloseButton = styled.button``;
