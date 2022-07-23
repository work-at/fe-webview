import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";
import BaseBottomDrawer from "../@shared/BottomDrawer/BottomDrawer";
import BaseCard from "../@shared/Card";
import BaseReLoadButton from "../@shared/Map/ReLoadButton";

export const Card = styled(BaseCard)`
  position: fixed;
  z-index: ${Z_INDEX.HIGH};
  bottom: 6rem;
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
