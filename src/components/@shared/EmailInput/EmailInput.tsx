import Button from "@/components/@shared/Button/Button";
import { forwardRef } from "react";
import * as S from "./EmailInput.styled";

export type InputProps = {
  placeholder?: string;
  isActive: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
const EmailInput = forwardRef<HTMLInputElement, InputProps>(({ isActive, ...rest }, ref) => {
  return (
    <S.InputWrap>
      <S.InputBox>
        <S.Input ref={ref} type="text" {...rest} />
        <Button active={isActive} type="submit" size="sm" round>
          인증요청
        </Button>
      </S.InputBox>
    </S.InputWrap>
  );
});

export default EmailInput;
