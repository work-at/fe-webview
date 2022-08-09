import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { ACCESS_TOKEN, PATH } from "@/constants";
import { useLoginMutation } from "@/domains/auth/auth.api";
import { useFlow } from "@/stack";
import { useCallback, useEffect } from "react";
import * as S from "./LoginPage.styled";
import Icon from "@/assets/Icon";
import BtnKakaoLogin from "@/assets/images/btn-kakaologin.png";
import { useStack } from "@stackflow/react";

const CLIENT_ID = "7052acd04b3385c80fac9bb40d8b5a32";
const CALLBACK_URL = (base: string) => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    `${base}/login`
  )}&response_type=code`;
};

const parseCallBack = (url: string) => {
  const params: { [key: string]: string } = {};
  const queryString = url.substring(1);
  const regex = /([^#?&=]+)=([^&]*)/g;
  let match;
  while ((match = regex.exec(queryString)) !== null) {
    params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
  }

  return params;
};

const LoginPage = () => {
  const { replace } = useFlow();
  const { mutateAsync: login } = useLoginMutation();
  const { activities } = useStack();
  const handleLogin = useCallback(
    async (code: string) => {
      try {
        if (code) {
          const { data } = await login({ code });
          if (data.code === "WORK01") {
            replace(PATH.ACCOMMODATION.stack, {}, { animate: false });
            sessionStorage.setItem(ACCESS_TOKEN, data.accessToken);
          }

          if (data.code === "WORK02") {
            replace(PATH.SIGN_UP.stack, { ...data }, { animate: true });
          }
        }
      } catch (error) {
        // alert("로그인 도중 에러가 발생했습니다.");
      }
    },
    [login, replace]
  );

  useEffect(() => {
    const { code } = parseCallBack(window.location.search) as { code: string };
    if (code) handleLogin(code);
  }, [handleLogin]);

  return (
    <StackLayout isHide={activities[activities.length - 1].name === "LoginPage"}>
      <S.SignUpIntro>
        <S.SignUpImage />
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
          <a href={CALLBACK_URL(window.location.origin)}>
            <img src={BtnKakaoLogin} alt="카카오로 시작하기" />
          </a>
        </S.BtnKaKaoLogin>
      </S.SignUpIntro>
    </StackLayout>
  );
};

export default LoginPage;
