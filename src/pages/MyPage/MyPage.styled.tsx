import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const MyPageMainWrap = styled.div`
  position: relative;
  padding-bottom: 25px;
`;

export const TopInfo = styled.div`
  padding: 80px 0 22px;
  border-bottom: 3px solid ${theme.colors.gray09};
`;

export const UserPicture = styled.div`
  position: relative;
  width: 115px;
  height: 115px;
  margin: 0 auto 23px;
`;

export const UserThumb = styled.label`
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    display: flex;
    width: 115px;
    height: 115px;
    object-fit: cover;
  }
`;

export const BtnCamera = styled.input`
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
  z-index: ${Z_INDEX.MIDDLE};
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
`;

export const CameraLabel = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
`;

export const UserName = styled.div`
  ${theme.fonts.Bold03};
  color: ${theme.colors.gray01};
  text-align: center;
`;

export const EtcInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 19px;
`;

export const EtcList = styled.li`
  position: relative;
  ${theme.fonts.Medium02};
  color: ${theme.colors.black};
  padding: 0 12px;
  &:nth-child(2):before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 13px;
    margin-top: -7.5px;
    background: ${theme.colors.gray05};
  }
`;

export const EtcChatList = styled.li`
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray02};
  background: ${theme.colors.gray10};
  display: flex;
  align-items: center;
  padding: 4px 13px 3px;
  border-radius: 17px;
  > strong {
    ${theme.fonts.Medium03};
    color: ${theme.colors.green};
    padding-left: 8px;
  }
`;

export const MyPageMenu = styled.ul`
  margin: 30px 0;
`;

export const MenuList = styled.li``;

export const MenuLink = styled.button`
  ${theme.fonts.Bold04};
  color: ${theme.colors.black};
  display: block;
  width: 100%;
  padding: 20px 16vw;
  text-align: left;
`;

export const CertiWrap = styled.div`
  margin: 70px 7.4667vw 0;
`;

export const BtnEmailCerti = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 57px;
  background: ${theme.colors.gray09};
  border-radius: 10px;
`;

export const Certitxt = styled.span`
  ${theme.fonts.Medium03};
  color: ${theme.colors.mainColor};
  padding-left: 20px;
`;
