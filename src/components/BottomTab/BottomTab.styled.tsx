import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 100%;
`;

export const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: ${({ isActive }) => (isActive ? "blue" : "gray")};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;

    svg > path {
      fill: ${({ isActive }) => (isActive ? "blue" : "gray")};
    }
  }
`;
