import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";
import BaseBottomDrawer from "../../@shared/BottomDrawer/BottomDrawer";
import BaseCard from "../../@shared/Card";
import BaseReLoadButton from "../../@shared/Map/ReLoadButton";

export const MapWrap = styled.div`
  position: relative;
  height: 100%;
`;

export const TabWrap = styled.div`
  position: absolute;
  top: 24px;
  left: 14.4vw;
  right: 14.4vw;
  z-index: ${Z_INDEX.HIGH};
`;

export const Card = styled(BaseCard)`
  position: fixed;
  z-index: ${Z_INDEX.HIGHEST};
  bottom: 110px;
  right: 0;
  left: 0;
`;

export const WorkerCountIndicator = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.HIGH};
  top: 10rem;
  right: 1rem;
  padding: 1rem;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const BottomDrawer = styled(BaseBottomDrawer)`
  background-color: #eee;
`;

export const DrawerHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  height: 97px;
  padding-top: 52px;
  background-color: ${theme.colors.white};
  z-index: ${Z_INDEX.HIGH};
`;

export const DrawerHeaderTxt = styled.p`
  width: 100%;
  justify-content: flex-start;
  padding-left: 47px;
  ${theme.fonts.SemiBold01};
  color: ${theme.colors.black};
  box-sizing: border-box;
  font-family: Pretendard;
`;

export const DrawerBody = styled.div`
  overflow: hidden;
  height: 100%;
  padding: 97px 0px 0;
  > div {
    overflow-y: scroll;
    height: 100%;
    padding-bottom: 30px;
  }
`;

export const BottomBtnWrap = styled.div`
  position: absolute;
  right: 20px;
  bottom: 27px;
  z-index: ${Z_INDEX.MIDDLE};
`;

export const BtnLocation = styled.button`
  display: block;
  border-radius: 100%;
  margin-top: 16px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
`;

export const BtnList = styled(BtnLocation)``;

export const WorkerLengWrap = styled.div`
  position: absolute;
  left: 26px;
  bottom: 26px;
  min-width: 110px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0px 7px;
  border-radius: 10px;
  z-index: ${Z_INDEX.HIGH};
`;

export const WorkerTit = styled.p`
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray03};
  text-align: center;
`;

export const WorkerLeng = styled.span`
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray03};
  display: flex;
  margin-top: 4px;
  align-items: flex-end;
  justify-content: center;
`;

export const Num = styled.span`
  ${theme.fonts.Medium00};
  color: ${theme.colors.mainColor};
  display: inline-block;
  vertical-align: middle;
  margin-bottom: -2px;
`;
