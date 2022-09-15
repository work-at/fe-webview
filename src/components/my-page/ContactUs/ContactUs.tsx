import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import { REPORTS } from "@/domains/common.constant";
import { Report } from "@/domains/common.type";
import { useAddUserReportMutation } from "@/domains/user";
import useAutoSizeTextArea from "@/hooks/useAutoSizeTextArea";
import { useFlow } from "@/stack";
import { useCallback, useRef, useState } from "react";
import * as S from "./ContactUs.styled";

const Report_TEXT: Record<Report, string> = {
  ERROR_REPORT: "오류 신고",
  INQUERY: "이용 문의",
  SERVICE_OFFER: "서비스 제안",
  OTHERS: "기타 문의/피드백",
};

const ContactUs = () => {
  const [reportType, setReportType] = useState<Report>();
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const { mutateAsync: addUserReport } = useAddUserReportMutation();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { pop } = useFlow();

  useAutoSizeTextArea(textAreaRef.current, content);

  const handleReportTypeChange: React.ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
    const { value } = event.target;

    setReportType(value === "default" ? undefined : (value as Report));
  }, []);

  const handleContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
    const { value } = event.target;

    setContent(value);
  }, []);

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.target;

    setEmail(value);
  }, []);

  const handleSendUserReport = async () => {
    if (!reportType) {
      alert("문의 유형을 선택해주세요");
      return;
    }

    try {
      await addUserReport({
        email,
        content,
        type: reportType,
      });

      alert("문의사항이 전송되었습니다! 기입하신 이메일로 빠른 시일 내로 답변드리겠습니다.");

      pop();
    } catch (error) {
      alert("문의사항 전송에 실패하였습니다.");
    }
  };

  return (
    <StackLayout>
      <S.MyContactUsWrap>
        <S.Input type="text" placeholder="이메일 입력" onChange={handleEmailChange} />
        <S.SelectWrap>
          <S.Select defaultValue={"default"} onChange={handleReportTypeChange}>
            <option value="default" disabled>
              문의 유형
            </option>
            {REPORTS.map((report) => (
              <option key={report} value={report}>
                {Report_TEXT[report]}
              </option>
            ))}
          </S.Select>
          <S.IconArr></S.IconArr>
        </S.SelectWrap>
        <S.Txtarea
          placeholder="문의내용을 입력해 주세요."
          onChange={handleContentChange}
          ref={textAreaRef}
          rows={1}
          value={content}
        />
      </S.MyContactUsWrap>
      <Button size="lg" bgColor="black" disabled={!reportType} onClick={handleSendUserReport}>
        보내기
      </Button>
    </StackLayout>
  );
};

export default ContactUs;
