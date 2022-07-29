import * as S from "./SignUpStage2.styled";
import Header from "@/components/@shared/Header/Header";
import CheckBox from "@/components/@shared/CheckBox/CheckBox";
import Button from "@/components/@shared/Button/Button";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";

const SignUpStage2 = () => {
  const { selected, isSelected, onChange } = useMultiselect([]);
  return (
    <>
      <Header useBack bgColor />
      <S.SignUpWrap>
        <S.SignUpTit>직무를 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>직무에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            isSelected={isSelected}
            onChange={onChange}
            items={[
              {
                id: "chk1",
                label: "개발자",
              },
              {
                id: "chk2",
                label: "디자인",
              },
              {
                id: "chk3",
                label: "기획/PM",
              },
              {
                id: "chk4",
                label: "마케팅",
              },
              {
                id: "chk5",
                label: "프리랜서",
              },
              {
                id: "chk6",
                label: "전문직",
              },
              {
                id: "chk7",
                label: "사무직",
              },
            ]}
          />
        </S.ChekBoxWrap>
        <S.SignUpTit>경력을 입력해 주세요</S.SignUpTit>
        <S.SignUpSubTit>연차에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
        <S.ChekBoxWrap>
          <CheckBox
            isSelected={isSelected}
            onChange={onChange}
            items={[
              {
                id: "chk8",
                label: "1~2년차",
              },
              {
                id: "chk9",
                label: "3~4년차",
              },
              {
                id: "chk10",
                label: "5~6년차",
              },
              {
                id: "chk11",
                label: "7~8년차",
              },
              {
                id: "chk12",
                label: "9~10년차",
              },
              {
                id: "chk13",
                label: "11년차 이상",
              },
            ]}
          />
        </S.ChekBoxWrap>
      </S.SignUpWrap>
      <Button size="lg" bgColor="black">
        다음
      </Button>
    </>
  );
};

export default SignUpStage2;
