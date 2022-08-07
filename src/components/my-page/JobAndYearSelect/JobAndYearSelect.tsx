import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { JOBS, YEAR_OF_SERVICES } from "@/domains/common.constant";
import { Job_TEXT, YearOfService_TEXT } from "@/domains/common.text";
import { Job, YearOfService } from "@/domains/common.type";

import * as S from "./JobAndYearSelect.styled";
import CheckBox from "@/components/@shared/CheckBox";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";
import Button from "@/components/@shared/Button/Button";
import { useFlow } from "@/stack";
import { useCallback } from "react";

const JobAndYearSelect = () => {
  const { selected: selectedJobs, onChange: onSelectedJobsChange } = useMultiselect<Job>([]);
  const { selected: selectedYearOfServices, onChange: onSelectedYearOfServicesChange } = useMultiselect<YearOfService>(
    []
  );
  const { pop } = useFlow();

  const handleJobAndYearSelectComplete = useCallback(() => {
    pop();
  }, [pop]);

  return (
    <StackLayout>
      <S.SignUpWrap>
        <S.SignUpTit>직무를 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>직무에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            selectedItemIds={selectedJobs}
            onChange={onSelectedJobsChange}
            items={JOBS.map((job) => ({
              id: job,
              label: Job_TEXT[job],
            }))}
          />
        </S.ChekBoxWrap>
        <S.SignUpTit>경력을 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>연차에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            selectedItemIds={selectedYearOfServices}
            onChange={onSelectedYearOfServicesChange}
            items={YEAR_OF_SERVICES.map((service) => ({
              id: service,
              label: YearOfService_TEXT[service],
              iconType: "ICON",
            }))}
          />
        </S.ChekBoxWrap>
      </S.SignUpWrap>
      <Button onClick={handleJobAndYearSelectComplete} size="lg" bgColor="black">
        다음
      </Button>
    </StackLayout>
  );
};

export default JobAndYearSelect;
