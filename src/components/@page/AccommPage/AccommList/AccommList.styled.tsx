import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const AccommListWrap = styled.div`
  position: relative;
  padding: 15px 7.4667vw 50px;
`;

export const KeywordTxt = styled.p`
  ${theme.fonts.SemiBold02};
  color: ${theme.colors.black};
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
    props.area === "seoul" &&
    `
    background: rgba(255, 0, 0, 0.05);

		`};
  ${(props) =>
    props.area === "jeju" &&
    `
      background: rgba(255, 122, 0, 0.05);
		`};
  ${(props) =>
    props.area === "gangneung" &&
    `
      background: rgba(73, 44, 255, 0.05);
		`};
  ${(props) =>
    props.area === "sokcho" &&
    `
      background: rgba(73, 44, 255, 0.05);
    `};
  background-size: cover;
`;

export const WalkatTxt = styled.p<{ area: string }>`
  ${theme.fonts.SemiBold03};
  ${(props) =>
    props.area === "seoul" &&
    `
      color: ${theme.colors.seoul};

		`};
  ${(props) =>
    props.area === "jeju" &&
    `
      color: ${theme.colors.jeju};
		`};
  ${(props) =>
    props.area === "gangneung" &&
    `
      color: ${theme.colors.gangWon};
		`};
  ${(props) =>
    props.area === "sokcho" &&
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
    props.area === "seoul" &&
    `
      color: ${theme.colors.seoul};
		`};
  ${(props) =>
    props.area === "jeju" &&
    `
      color:  ${theme.colors.jeju};
		`};
  ${(props) =>
    props.area === "gangneung" &&
    `
      color: ${theme.colors.gangWon};
		`};
  ${(props) =>
    props.area === "sokcho" &&
    `
      color: ${theme.colors.gangWon};
		`};
  margin-left: 3px;
`;

export const AccommList = styled.ul`
  margin-top: 15px;
`;

export const AccommListItem = styled.li`
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4.28462px 10px rgba(0, 0, 0, 0.1);
  &:first-child {
    margin-top: 0;
  }
`;

export const LinkDetail = styled.button`
  display: block;
  width: 100%;
`;

export const AccommThumb = styled.div`
  > img {
    width: 100%;
  }
`;

export const DetailInfo = styled.div`
  padding: 8px 14px 13px;
  background: #fff;
  text-align: left;
`;

export const AccommName = styled.p`
  ${theme.fonts.SemiBold03};
  color: ${theme.colors.black};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const AccommPriceInfo = styled.div``;

export const ConsecutivePriceTxt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StandardTxt = styled.span<{ area: string }>`
  ${theme.fonts.Medium06};
  ${(props) =>
    props.area === "all" &&
    `
      color: ${theme.colors.mainColor};
		`};
  ${(props) =>
    props.area === "seoul" &&
    `
      color: ${theme.colors.seoul};
		`};
  ${(props) =>
    props.area === "jeju" &&
    `
      color:  ${theme.colors.jeju};
		`};
  ${(props) =>
    props.area === "gangneung" &&
    `
      color: ${theme.colors.gangWon};
		`};
  ${(props) =>
    props.area === "sokcho" &&
    `
      color: ${theme.colors.gangWon};
		`};
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PriceTxt = styled.span`
  ${theme.fonts.Bold02};
  color: ${theme.colors.black};
`;

export const WonTxt = styled.span`
  ${theme.fonts.Medium01};
  color: ${theme.colors.black};
  padding: 0 2px 0 3px;
`;

export const FromTxt = styled.span`
  ${theme.fonts.Medium06};
  color: ${theme.colors.black};
`;

export const DayPriceTxt = styled.span`
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray02};
  display: block;
  text-align: right;
`;

export const AccommReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -5px;
`;

export const AccommReviewListItem = styled.li`
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray04};
  background: ${theme.colors.gray10};
  padding: 5px 11px;
  border-radius: 40px;
  margin: 7px 0 0 5px;
`;
