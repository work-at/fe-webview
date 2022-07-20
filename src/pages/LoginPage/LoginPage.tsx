import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { PATH } from "@/constants";
import { useLoginMutation } from "@/domains/auth/auth.api";
import { useFlow } from "@/stack";
import { useCallback, useEffect, useState } from "react";

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
  const [originUrl, setOriginUrl] = useState("");
  const { replace } = useFlow();
  const { mutateAsync: login } = useLoginMutation();

  useEffect(() => {
    const { origin } = window.location;
    setOriginUrl(origin);
  }, []);

  const handleLogin = useCallback(
    async (code: string) => {
      console.log(code);
      try {
        if (code) {
          const { data } = await login({ code });
          if (data.code === "WORK01") {
            replace(PATH.ACCOMMODATION.stack, {}, { animate: false });
          }

          if (data.code === "WORK02") {
            replace(PATH.SIGN_UP.stack, { ...data }, { animate: false });
          }
        }
      } catch (error) {
        alert("로그인 도중 에러가 발생했습니다.");
      }
    },
    [login, originUrl]
  );

  useEffect(() => {
    const { code } = parseCallBack(window.location.search) as { code: string };
    handleLogin(code);
  }, []);

  return (
    <StackLayout>
      <a href={CALLBACK_URL(originUrl)}>login</a>
    </StackLayout>
  );
};

export default LoginPage;
