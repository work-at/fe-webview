import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 83px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    color: ${({ isActive }) => (isActive ? "#0000FF" : "#606161")};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-bottom: 7px;

    svg > path {
      fill: ${({ isActive }) => (isActive ? "#0000FF" : "#606161")};
    }
  }
`;
