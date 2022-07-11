import { Z_INDEX } from "@/constants/zIndex";
import { theme } from "@/assets/styles/theme";
import styled from "styled-components";

export const TabWrap = styled.div`
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 42px;
  border-radius: 80px;
  overflow: hidden;
`;

export const TabList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TabItem = styled.li<{ itemCount: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${({ itemCount }) => `${100 / itemCount}%`};
  z-index: ${Z_INDEX.LOW};
`;

export const TabLink = styled.button`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
`;

export const TabText = styled.span<{ isSelected: boolean }>`
  display: block;
  transition: color 0.5s, font-weight 0.5s, transform 0.5s;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  transform: scale(${({ isSelected }) => (isSelected ? "120%" : "100%")});
  color: ${({ isSelected }) => (isSelected ? theme.colors.white : theme.colors.black100)};
`;

export const TabIndicatorWrapper = styled.div<{ itemCount: number; selectedItemIndex: number }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.LOW - 1};
  width: ${({ itemCount }) => `${100 / itemCount}%`};
  height: 100%;
  transition: transform 0.5s;
  transform: ${({ selectedItemIndex }) => `translateX(${100 * selectedItemIndex}%)`};
  padding: 4px;
`;

export const TabIndicator = styled.div`
  border-radius: 80px;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.mainColor};
`;
