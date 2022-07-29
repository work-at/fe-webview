import React, { useState } from "react";
import Button from "@/components/@shared/Button/Button";
import * as S from "./Input.styled";

export type InputProps = {
  placeholder?: string;
  count?: boolean;
  doubleChk?: boolean;
};

const Input = ({ placeholder, count, doubleChk }: InputProps) => {
  return (
    <S.InputWrap>
      {count && (
        <S.InputCount>
          <S.CountTxt>5</S.CountTxt>/8
        </S.InputCount>
      )}
      <S.InputBox>
        <S.Input type="text" placeholder={placeholder} />
        {doubleChk && (
          <Button size="sm" round>
            중복확인
          </Button>
        )}
      </S.InputBox>
      <S.ErrorTxt>닉네임 중복확인을 해주세요.</S.ErrorTxt>
      <S.SuccessTxt>사용 가능한 닉네임입니다.</S.SuccessTxt>
    </S.InputWrap>
  );
};

export default Input;
