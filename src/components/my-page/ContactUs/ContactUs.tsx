import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import useAutoSizeTextArea from "@/hooks/useAutoSizeTextArea";
import { useRef, useState } from "react";
import * as S from "./ContactUs.styled";

const Textarea = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutoSizeTextArea(textAreaRef.current, value);

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

const ContactUs = () => {
  return (
    <StackLayout>
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
    </StackLayout>
  );
};

export default ContactUs;
