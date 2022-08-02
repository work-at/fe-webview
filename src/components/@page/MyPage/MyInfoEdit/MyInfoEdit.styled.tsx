import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const MyInfoEditWrap = styled.div`
  position: relative;
  padding-bottom: 115px;
`;

export const MyInfoItem = styled.dl`
  display: flex;
  align-items: center;
  padding: 22px 7.4667vw;
  border-bottom: 1px solid ${theme.colors.gray08};
  width: 100%;
  &:last-child {
    padding-bottom: 0;
    border: none;
  }
`;

export const MyInfoFullItem = styled(MyInfoItem)`
  flex-wrap: wrap;
`;

export const ItemHead = styled.dt`
  ${theme.fonts.Bold04};
  color: ${theme.colors.black};
  padding-right: 36px;
  flex-shrink: 0;
`;

export const HeadEtcTxt = styled.span`
  ${theme.fonts.Medium04};
  color: ${theme.colors.gray04};
  padding-left: 2px;
  display: inline-block;
  vertical-align: middle;
`;

export const ItemBody = styled.dd`
  ${theme.fonts.Medium02};
  color: ${theme.colors.gray03};
  flex-shrink: 1;
  width: 100%;
  > button {
    float: right;
  }
`;

export const BtnEdit = styled.button``;

export const TxtWrap = styled.div`
  ${theme.fonts.Medium03};
  background: ${theme.colors.gray10};
  padding: 14px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const ChekBoxWrap = styled.div`
  margin-top: 18px;
`;
