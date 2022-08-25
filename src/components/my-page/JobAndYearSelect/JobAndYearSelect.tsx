import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { JOBS, YEAR_OF_SERVICES } from "@/domains/common.constant";
import { Job, YearOfService } from "@/domains/common.type";

import * as S from "./JobAndYearSelect.styled";
import CheckBox from "@/components/@shared/CheckBox";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";
import Button from "@/components/@shared/Button/Button";
import { useFlow } from "@/stack";
import { useCallback, useEffect } from "react";
import { useAtom } from "jotai";
import { jobAndYearAtom } from "../ProfileEdit/ProfileEdit";

// type JobAndYearSelectProps = {
//   onJobChange: (jobs: Job) => void;
//   onYearOfServiceChange: (yearOfService: YearOfService) => void;
// };

const JobAndYearSelect = () => {
  const { selected: selectedJobs, onChangeOnly: onSelectedJobChange } = useMultiselect<Job>([]);
  const { selected: selectedYearOfServices, onChangeOnly: onSelectedYearOfServiceChange } =
    useMultiselect<YearOfService>([]);

  const [jobAndYear, setJobAndYear] = useAtom(jobAndYearAtom);

  const { pop } = useFlow();

  const handleJobAndYearSelectComplete = useCallback(() => {
    pop();
  }, [pop]);

  const handleJobSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobAndYear({
      ...jobAndYear,
      job: selectedJobs[0],
    });

    onSelectedJobChange(event);
  };
  const handleYearSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobAndYear({
      ...jobAndYear,
      year: selectedYearOfServices[0],
    });

    onSelectedYearOfServiceChange(event);
  };

  return (
    <StackLayout>
      <S.SignUpWrap>
        <S.SignUpTit>직무를 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>직무에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            selectedItemIds={selectedJobs}
            onChange={handleJobSelect}
            items={JOBS.map((job) => ({
              id: job.content,
              label: job.content,
            }))}
          />
        </S.ChekBoxWrap>
        <S.SignUpTit>경력을 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>연차에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            selectedItemIds={selectedYearOfServices}
            onChange={handleYearSelect}
            items={YEAR_OF_SERVICES.map((service) => ({
              id: service.content,
              label: service.content,
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
