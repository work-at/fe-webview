import * as S from "./MyEmailCerti.styled";
import Header from "@/components/@shared/Header/Header";
import Button from "@/components/@shared/Button/Button";
import EmailInput from "@/components/@shared/EmailInput/EmailInput";

const MyEmailCerti = () => {
  return (
    <>
      <Header useBack bgColor />
      <S.SignUpWrap>
        <S.SignUpTit>
          회사 이메일을
          <br />
          입력해 주세요
        </S.SignUpTit>
        <S.SignUpSubTit>회사 인증을 완료하면 워크챗 성사 확률이 높아져요.</S.SignUpSubTit>
        <S.SignUpInputWrap>
          <EmailInput placeholder="이메일 입력" />
        </S.SignUpInputWrap>
      </S.SignUpWrap>
      <Button size="lg" bgColor="black">
        확인
      </Button>
    </>
  );
};

export default MyEmailCerti;
