import { Z_INDEX } from "@/constants/zIndex";
import styled from "styled-components";

export const Header = styled.header``;

export const Address = styled.h1`
  color: #121212;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  position: fixed;
  z-index: ${Z_INDEX.LOW};
  top: 1.5rem;
  left: 2rem;
`;
