import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const MagazineWrap = styled.div`
  position: relative;
  top: -97px;
`;

export const VisualWrap = styled.div`
  position: relative;
  > img {
    display: block;
    width: 100%;
  }
`;

export const BottomWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-top: -9%;
  background: ${theme.colors.white};
  padding: 40px 7.4667vw 0;
  border-radius: 27px 27px 0 0;
  z-index: ${Z_INDEX.ROOT};
`;

export const MagazineTxt = styled.p`
  ${theme.fonts.Regular03};
  color: ${theme.colors.black};
  margin-top: 20px;
`;

export const SeoulFlag = styled.span`
  position: relative;
  display: inline-block;
  margin: 32px 0 15px;
  padding: 0 12px;
  ${theme.fonts.SemiBold03};
  color: ${theme.colors.white};
  height: 27px;
  line-height: 27px;
  border-radius: 19px;
  background: ${theme.colors.seoul};
  vertical-align: middle;
  z-index: ${Z_INDEX.MIDDLE};
`;

export const JejuFlag = styled(SeoulFlag)`
  background: ${theme.colors.jeju};
`;

export const GangWonFlag = styled(SeoulFlag)`
  background: ${theme.colors.gangWon};
`;

export const MagazineTit = styled.p`
  ${theme.fonts.SemiBold02};
  color: ${theme.colors.black};
`;

export const PlaceLogo = styled.div`
  width: 73.33vw;
  height: auto;
  margin: 13px auto 0;
  > img {
    width: 100%;
  }
`;

export const PlaceName = styled.p`
  ${theme.fonts.Bold03};
  color: ${theme.colors.gray01};
  text-align: center;
`;

export const PlaceAddr = styled.p`
  ${theme.fonts.Medium03};
  color: ${theme.colors.gray02};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 0;
  > svg {
    margin-right: 9px;
  }
`;

export const PlaceImg = styled.div`
  margin-top: 20px;
  > img {
    width: 100%;
  }
  & + & {
    margin-top: 10px;
  }
`;

export const PlaceTxt = styled.p`
  ${theme.fonts.Medium03};
  color: ${theme.colors.gray02};
  margin-top: 18px;
  text-align: center;
`;

export const BtnListGo = styled.button`
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.gray09};
  border-radius: 10px;
  margin-top: 23px;
  > svg {
    margin-right: 15px;
  }
`;

export const GoJejuTxt = styled.p`
  ${theme.fonts.Medium03};
  color: ${theme.colors.jeju};
`;

export const GoSeoulTxt = styled(GoJejuTxt)`
  color: ${theme.colors.seoul};
`;

export const GoGangWonTxt = styled(GoJejuTxt)`
  color: ${theme.colors.gangWon};
`;
