import * as S from "./SignUpFinish.styled";
import Button from "@/components/@shared/Button/Button";

const SignUpFinish = () => {
  return (
    <>
      <S.SignUpFinish>
        <S.FinishTxt>
          축하합니다!
          <br />
          이제 워케이션을 떠나볼까요?
        </S.FinishTxt>
        <Button size="lg" bgColor="black">
          시작하기
        </Button>
      </S.SignUpFinish>
    </>
  );
};

export default SignUpFinish;
