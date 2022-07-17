import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const CardWrap = styled.div<{ isClickable: boolean }>`
  padding: 14px 20px;
  background: ${theme.colors.white};
  border-radius: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-top: 15px;

  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "auto")};

  &:first-child {
    margin-top: 18px;
  }
`;

export const CardTop = styled.div`
  display: flex;
`;

export const UserThumb = styled.div`
  width: 107px;
  height: 107px;
  overflow: hidden;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    display: flex;
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  margin-left: 20px;
  margin-top: 13px;
`;

export const NickName = styled.p`
  color: ${theme.colors.black100};
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
`;

export const UserEtc = styled.ul`
  margin-top: 5px;

  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const InfoList = styled.li`
  position: relative;
  float: left;
  padding: 0 10px;
  font-size: 12px;
  color: ${theme.colors.black100};

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 8px;
    margin-top: -4px;
    background: #e2e0e1;
  }

  &:first-child {
    padding-left: 0;
    &:before {
      display: none;
    }
  }
`;

export const CardBottom = styled.ul`
  margin-top: 14px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const TagList = styled.li`
  float: left;
  margin-left: 20px;
  padding: 0 12px;
  background: #f8f8f8;
  font-size: 11px;
  line-height: 25px;
  border-radius: 40px;
  &:first-child {
    margin-left: 8px;
  }
`;
