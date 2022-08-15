import React, { useState, useEffect, useRef } from "react";
import * as S from "./MyContactUs.styled";
import Header from "@/components/@shared/Header/Header";
import Button from "@/components/@shared/Button/Button";

export const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

const Textarea = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <S.Txtarea
      placeholder="문의내용을 입력해 주세요."
      onChange={handleChange}
      ref={textAreaRef}
      rows={1}
      value={value}
    />
  );
};

const MyContactUs = () => {
  return (
    <>
      <Header useBack bgColor />
      <S.MyContactUsWrap>
        <S.Input type="text" placeholder="이메일 입력" />
        <S.SelectWrap>
          <S.Select defaultValue={"default"}>
            <option value="default" disabled>
              문의 유형
            </option>
            <option>이용 문의</option>
            <option>서비스 제안</option>
            <option>오류 신고</option>
            <option>기타 문의/피드백</option>
          </S.Select>
          <S.IconArr></S.IconArr>
        </S.SelectWrap>
        <Textarea />
      </S.MyContactUsWrap>
      <Button size="lg" bgColor="black">
        보내기
      </Button>
    </>
  );
};

export default MyContactUs;
