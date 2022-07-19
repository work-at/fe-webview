import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";
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
  top: 5rem;
  right: 1rem;
`;
