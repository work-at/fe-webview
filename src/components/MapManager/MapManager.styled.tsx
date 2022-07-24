import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";
import BaseBottomDrawer from "../@shared/BottomDrawer/BottomDrawer";
import BaseCard from "../@shared/Card";
import BaseReLoadButton from "../@shared/Map/ReLoadButton";

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
  z-index: ${Z_INDEX.HIGH};
  bottom: 110px;
  right: 0;
  left: 0;
`;

export const ReLoadButton = styled(BaseReLoadButton)`
  position: fixed;
  z-index: ${Z_INDEX.HIGH};
  bottom: 6rem;
  right: 1rem;
  padding: 1rem;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const ListToggleButton = styled.button`
  position: fixed;
  z-index: ${Z_INDEX.HIGH};
  bottom: 10rem;
  right: 1rem;
  padding: 1rem;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const BottomDrawer = styled(BaseBottomDrawer)`
  background-color: #eee;
`;

export const DrawerHeader = styled.div`
  height: 6rem;
  background-color: ${theme.colors.white};
`;

export const DrawerBody = styled.div`
  padding: 2rem 1rem 0rem 1rem;
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
