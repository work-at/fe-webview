import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.HIGH};
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  transition: transform 1s;

  ${({ isOpen }) =>
    isOpen
      ? `
      transform: translateY(0%);
    `
      : `
      transform: translateY(100%);
    `}
`;

export const Header = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end; */
`;

export const Body = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  position: absolute;
  top: 54px;
  left: 16px;
  z-index: ${Z_INDEX.HIGHEST};
`;
