import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const CardWrap = styled.div<{ isClickable: boolean }>`
  padding: 15px 17px 11px;
  background: ${theme.colors.white};
  border-radius: 27px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 16px 15px 0;

  ${({ isClickable }) => (isClickable ? "cursor: pointer" : "")}

  @media screen and (max-width: 340px) {
    padding: 15px 12px 11px;
  }
`;

export const CardTop = styled.div`
  display: flex;
`;

export const CardThumb = styled.div`
  width: 107px;
  height: 107px;
  overflow: hidden;
  border-radius: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${theme.colors.gray09};
  > img {
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 340px) {
    width: 97px;
    height: 97px;
    border-radius: 17px;
  }
`;

export const DetailInfo = styled.div`
  position: relative;
  width: calc(100% - 107px);
  padding: 4px 0 0 11px;
  flex-shrink: 1;
  @media screen and (max-width: 340px) {
    width: calc(100% - 97px);
  }
`;

export const Title = styled.p`
  ${theme.fonts.Bold04}
  color: ${theme.colors.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WalkChat = styled.p`
  ${theme.fonts.SemiBold04};
  color: ${theme.colors.green};
  position: absolute;
  top: 7px;
  right: 0;
`;

export const ChatNum = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 2px;
  ${theme.fonts.Bold07};
  color: ${theme.colors.green};
`;

export const StoreEtc = styled.div`
  padding: 4px 0 0 2px;
`;

export const ReviewTxt = styled.p`
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray04};
`;

export const AddrTxt = styled.p`
  margin-top: 2px;
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray03};
`;

export const WorcationerEtc = styled.ul`
  margin-top: 4px;

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
  ${theme.fonts.Medium03};
  color: ${theme.colors.gray02};

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 10px;
    margin-top: -6px;
    background: ${theme.colors.gray02};
  }

  &:first-child {
    padding-left: 0;
    &:before {
      display: none;
    }
  }
`;

export const CardBottom = styled.ul`
  margin: 8px 0 0 -7px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const TagList = styled.li`
  float: left;
  margin-left: 7px;
  padding: 5px 11px;
  background: ${theme.colors.gray09};
  ${theme.fonts.Medium06}
  border-radius: 40px;
  @media screen and (max-width: 340px) {
    padding: 5px 8px;
    margin-left: 4px;
  }
`;
