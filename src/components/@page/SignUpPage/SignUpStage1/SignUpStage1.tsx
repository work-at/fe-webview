import * as S from "./SignUpStage1.styled";
import Header from "@/components/@shared/Header/Header";
import Input from "@/components/@shared/Input/Input";
import Button from "@/components/@shared/Button/Button";

const SignUpStage1 = () => {
  return (
    <>
      <Header useBack bgColor />
      <S.SignUpWrap>
        <S.SignUpTit>
          닉네임을
          <br />
          입력해 주세요
        </S.SignUpTit>
        <S.SignUpSubTit>다른 사용자에게 공개되는 닉네임이며 변경할 수 있어요.</S.SignUpSubTit>
        <S.SignUpInputWrap>
          <Input placeholder="닉네임 입력" count={0} />
        </S.SignUpInputWrap>
      </S.SignUpWrap>
      <Button size="lg" bgColor="black">
        다음
      </Button>
    </>
  );
};

export default SignUpStage1;
