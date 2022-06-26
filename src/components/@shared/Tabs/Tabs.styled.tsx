import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const TabItem = styled.button<{ itemCount: number }>`
  position: relative;
  z-index: ${Z_INDEX.LOW};
  width: ${({ itemCount }) => `${100 / itemCount}%`};
  background: none;
`;

export const TabIndicator = styled.div<{ itemCount: number; selectedItemIndex: number }>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: tomato;
  z-index: ${Z_INDEX.LOW - 1};
  width: ${({ itemCount }) => `${100 / itemCount}%`};
  height: 100%;

  transition: transform 0.5s;
  transform: ${({ selectedItemIndex }) => `translateX(${100 * selectedItemIndex}%)`};
`;
