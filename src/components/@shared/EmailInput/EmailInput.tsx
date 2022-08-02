import React, { useState } from "react";
import Button from "@/components/@shared/Button/Button";
import * as S from "./EmailInput.styled";

export type InputProps = {
  placeholder?: string;
};

const EmailInput = ({ placeholder }: InputProps) => {
  return (
    <S.InputWrap>
      <S.InputBox>
        <S.Input type="text" placeholder={placeholder} />
        <Button size="sm" round>
          인증요청
        </Button>
      </S.InputBox>
      <S.ErrorTxt>인증 메일 발송횟수를 초과해 인증이 불가합니다. (5/5)</S.ErrorTxt>
      <S.SuccessTxt>인증 메일이 전송되었습니다! (1/5)</S.SuccessTxt>
    </S.InputWrap>
  );
};

export default EmailInput;
