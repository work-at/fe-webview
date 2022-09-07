import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const AccommMainWrap = styled.div`
  position: relative;
`;

export const BtnSearch = styled.button`
  display: flex;
  position: absolute;
  top: -43px;
  right: 7.4667vw;
  z-index: ${Z_INDEX.HIGH};
`;

export const VisualWrapContainer = styled.div`
  position: relative;
  top: -97px;
`;

export const VisualWrapList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100vw;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  background-color: rgba(0, 0, 0, 0.1);

  cursor: move;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const VisualWrap = styled.li`
  position: relative;
  > img {
    display: block;
    width: 100%;
  }

  scroll-snap-align: start;
`;

export const VisualTxtBox = styled.div`
  position: absolute;
  left: 7.4667vw;
  right: 7.4667vw;
  bottom: 76px;
`;

export const VisualDotBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 49px;
  display: flex;
  justify-content: center;
  svg:not(:last-child) {
    margin-right: 9px;
  }
`;

export const VisualTxt = styled.p`
  ${theme.fonts.Bold01};
  color: ${theme.colors.white};
  margin-top: 6px;
`;

export const BottomWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-top: -34%;
  background: ${theme.colors.white};
  padding: 21px 0 0;
  border-radius: 27px 27px 0 0;
  z-index: 1;
`;

export const BottomTit = styled.h2`
  ${theme.fonts.SemiBold03};
  color: ${theme.colors.black};
  padding: 0 7.4667vw 12px;
`;

export const AreaList = styled.ul`
  padding: 0 0 0 7.4667vw;
  white-space: nowrap;
`;

export const AreaListItem = styled.li`
  display: inline-grid;
  align-items: start;
  margin-left: 15px;
  text-align: center;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 4.2667vw;
  }
`;

export const BtnArea = styled.button`
  display: block;
  width: 100%;
`;

export const AreaThumb = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 100%;
  overflow: hidden;
  > img {
    width: 100%;
  }
`;

export const AreaTxt = styled.span`
  ${theme.fonts.Medium03};
  color: ${theme.colors.black};
  display: block;
  padding-top: 5px;
`;

export const WalkatDensityContainer = styled.div`
  margin: 24px 7.4667vw 55px;
`;

export const WalkatDensity = styled.div<{ area: string }>`
  height: 57px;
  border-radius: 15px;
  padding: 0 17px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.area === "SEOUL" &&
    `
    background: rgba(255, 0, 0, 0.05);

		`};
  ${(props) =>
    props.area === "JEJU" &&
    `
      background: rgba(255, 122, 0, 0.05);
		`};
  ${(props) =>
    props.area === "GANGNEUNG" &&
    `
      background: rgba(73, 44, 255, 0.05);
		`};
  ${(props) =>
    props.area === "SOKCHO" &&
    `
      background: rgba(73, 44, 255, 0.05);
    `};
  background-size: cover;
`;

export const WalkatTxt = styled.p<{ area: string }>`
  ${theme.fonts.SemiBold03};
  ${(props) =>
    props.area === "SEOUL" &&
    `
      color: ${theme.colors.seoul};

		`};
  ${(props) =>
    props.area === "JEJU" &&
    `
      color: ${theme.colors.jeju};
		`};
  ${(props) =>
    props.area === "GANGNEUNG" &&
    `
      color: ${theme.colors.gangWon};
		`};
  ${(props) =>
    props.area === "SOKCHO" &&
    `
      color: ${theme.colors.gangWon};
    `};
`;

export const StateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  background: ${theme.colors.white};
  border-radius: 20px;
`;

export const StateTxt = styled.span<{ area: string }>`
  ${theme.fonts.Bold06};
  ${(props) =>
    props.area === "SEOUL" &&
    `
      color: ${theme.colors.seoul};
		`};
  ${(props) =>
    props.area === "JEJU" &&
    `
      color:  ${theme.colors.jeju};
		`};
  ${(props) =>
    props.area === "GANGNEUNG" &&
    `
      color: ${theme.colors.gangWon};
		`};
  ${(props) =>
    props.area === "SOKCHO" &&
    `
      color: ${theme.colors.gangWon};
		`};
  margin-left: 3px;
`;

export const ScrollWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ScrollInner = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AccommList = styled.ul`
  padding: 0 0 55px 7.4667vw;
  white-space: nowrap;
`;

export const AccommListItem = styled.li`
  display: inline-grid;
  align-items: start;
  position: relative;
  margin-right: 12px;
  width: 75.2vw;
  border-radius: 10px;
  overflow: hidden;
  &:last-child {
    margin-right: 7.4667vw;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(18, 18, 18, 0.15);
    z-index: ${Z_INDEX.UNDER_ROOT};
  }
`;

export const LinkDetail = styled.button`
  display: block;
  width: 100%;

  > img {
    width: 100%;
    height: 131.71px;
    object-fit: cover;
  }
`;

export const Accomminfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 68px;
  padding: 5px 15px 15px;
  text-align: left;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: ${Z_INDEX.ROOT};
    transform: rotate(180deg);
    background: linear-gradient(180deg, rgba(18, 18, 18, 0.7) 0%, rgba(18, 18, 18, 0) 100%);
  }
`;

export const AccommSeoulFlag = styled.span`
  position: relative;
  display: inline-block;
  padding: 0 9px;
  ${theme.fonts.SemiBold04};
  color: ${theme.colors.white};
  height: 20px;
  line-height: 20px;
  border-radius: 19px;
  background: ${theme.colors.seoul};
  vertical-align: middle;
  z-index: ${Z_INDEX.MIDDLE};
`;

export const AccommJejuFlag = styled(AccommSeoulFlag)`
  background: ${theme.colors.jeju};
`;

export const AccommGangWonFlag = styled(AccommSeoulFlag)`
  background: ${theme.colors.gangWon};
`;

export const AccommEventFlag = styled(AccommSeoulFlag)`
  background: ${theme.colors.yellow};
`;

export const AccommName = styled.p`
  position: relative;
  ${theme.fonts.SemiBold02};
  color: ${theme.colors.white};
  margin-top: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  z-index: ${Z_INDEX.MIDDLE};
`;

export const SpaceList = styled.ul`
  padding: 0 0 55px 7.4667vw;
  white-space: nowrap;
`;

export const SpaceListItem = styled.li`
  display: inline-grid;
  align-items: start;
  position: relative;
  width: 38.1333vw;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 16px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 7.4667vw;
  }
`;

export const SpaceTxt = styled.p`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 7px;
  ${theme.fonts.SemiBold02};
  color: ${theme.colors.white};
  text-align: left;
`;

export const ReadyBox = styled.div`
  padding-bottom: 50px;
  text-align: center;
`;

export const ReadyTxt = styled.p`
  ${theme.fonts.Medium02};
  color: ${theme.colors.black};
  margin-top: 4px;
`;
