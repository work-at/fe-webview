import styled from "styled-components";

export const TabWrap = styled.div`
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 42px;
  border-radius: 80px;
  overflow: hidden;
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TabItem = styled.li<{ itemCount: number; selectedItemIndex: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${({ itemCount }) => `${100 / itemCount}%`};
`;

export const TabLink = styled.button`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
`;

export const TabText = styled.span``;
