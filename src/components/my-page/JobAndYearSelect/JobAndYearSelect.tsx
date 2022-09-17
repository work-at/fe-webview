import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { JOBS, YEAR_OF_SERVICES } from "@/domains/common.constant";

import * as S from "./JobAndYearSelect.styled";
import CheckBox from "@/components/@shared/CheckBox";
import Button from "@/components/@shared/Button/Button";
import { useFlow } from "@/stack";
import { useCallback } from "react";
import { useAtom } from "jotai";
import { jobAtom, yearAtom } from "../ProfileEdit/ProfileEdit";

const JobAndYearSelect = () => {
  const [job, setJob] = useAtom(jobAtom);
  const [year, setYear] = useAtom(yearAtom);
  const { pop } = useFlow();

  const handleJobAndYearSelectComplete = useCallback(() => {
    pop();
  }, [pop]);

  const handleJobSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJob(event.target.value);
  };
  const handleYearSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  return (
    <StackLayout>
      <S.SignUpWrap>
        <S.SignUpTit>직무를 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>직무에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            selectedItemIds={job ? [job] : []}
            onChange={handleJobSelect}
            items={JOBS.map((job) => ({
              id: job.name,
              label: job.content,
            }))}
          />
        </S.ChekBoxWrap>
        <S.SignUpTit>경력을 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>연차에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            selectedItemIds={year ? [year] : []}
            onChange={handleYearSelect}
            items={YEAR_OF_SERVICES.map((service) => ({
              id: service.name,
              label: service.content,
            }))}
          />
        </S.ChekBoxWrap>
      </S.SignUpWrap>
      <Button onClick={handleJobAndYearSelectComplete} size="lg" bgColor="black">
        확인
      </Button>
    </StackLayout>
  );
};

export default JobAndYearSelect;
