import * as S from "./MyPageMain.styled";
import UserImg from "@/assets/images/walkchat1.png";
import Icon from "@/assets/Icon";

const MyPageMain = () => {
  return (
    <>
      <S.MyPageMainWrap>
        <S.TopInfo>
          <S.UserPicture>
            <S.UserThumb>
              <img src={UserImg} alt="유저 이미지" />
            </S.UserThumb>
            <S.CameraLabel>
              <Icon icon="IconCamera" />
              <S.BtnCamera type="file" accept="image/*" />
            </S.CameraLabel>
          </S.UserPicture>
          <S.UserName>이름여덟글자제한</S.UserName>
          <S.EtcInfo>
            <S.EtcList>디자인</S.EtcList>
            <S.EtcList>1-2년차</S.EtcList>
            <S.EtcChatList>
              워크챗<strong>05</strong>
            </S.EtcChatList>
          </S.EtcInfo>
        </S.TopInfo>

        <S.MyPageMenu>
          <S.MenuList>
            <S.MenuLink>프로필 수정</S.MenuLink>
          </S.MenuList>
          <S.MenuList>
            <S.MenuLink>설정</S.MenuLink>
          </S.MenuList>
          <S.MenuList>
            <S.MenuLink>문의</S.MenuLink>
          </S.MenuList>
        </S.MyPageMenu>

        <S.CertiWrap>
          <S.BtnEmailCerti>
            <Icon icon="IconStar" />
            <S.Certitxt>회사 인증하고 워크챗 참여하기!</S.Certitxt>
          </S.BtnEmailCerti>
        </S.CertiWrap>
      </S.MyPageMainWrap>
    </>
  );
};

export default MyPageMain;
