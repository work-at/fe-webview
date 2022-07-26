import * as S from "./SignUpIntro.styled";
import Icon from "@/assets/Icon";
import BtnKakaoLogin from "@/assets/images/btn-kakaologin.png";

const SignUpIntro = () => {
  return (
    <>
      <S.SignUpIntro>
        <S.Logo>
          <Icon icon="Logo" />
        </S.Logo>
        <S.IntroTxt>
          일상에 변화를 줘보세요.
          <br />
          <br />
          새로운 에너지를 충전하고
          <br />
          업무 효율을 높이세요.
        </S.IntroTxt>
        <S.BtnKaKaoLogin>
          <img src={BtnKakaoLogin} alt="카카오로 시작하기" />
        </S.BtnKaKaoLogin>
      </S.SignUpIntro>
    </>
  );
};

export default SignUpIntro;
