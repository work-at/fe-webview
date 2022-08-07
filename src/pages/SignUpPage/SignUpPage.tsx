import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useActivityParams } from "@stackflow/react";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import Header from "@/components/@shared/Header/Header";
import Input from "@/components/@shared/Input/Input";
import { ACCESS_TOKEN, PATH } from "@/constants";
import { usePositionListQuery, useSignUpMutation, useWorkingYearListQuery } from "@/domains/auth/auth.api";
import { SignUpRequest } from "@/domains/auth/auth.dto";
import { PositionType, WorkingYearType } from "@/domains/auth/auth.text";
import { useFlow } from "@/stack";
import * as S from "./SignUpPage.styled";
import CheckBox from "@/components/@shared/CheckBox";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";

const NICKNAME_STEP = 0;
const POSITION_WORKING_YEAR_STEP = 1;
const SIGN_UP_FINISH = 2;

const SignUpPage = () => {
  const [step, setStep] = useState(NICKNAME_STEP);
  const { oauthId } = useActivityParams();

  const { replace } = useFlow();
  const { mutateAsync: signUp } = useSignUpMutation();

  const { data: positionList } = usePositionListQuery();
  const { data: workingYearList } = useWorkingYearListQuery();

  const methods = useForm<SignUpRequest>({
    defaultValues: {
      nickname: "",
      oauthType: "KAKAO",
    },
  });

  const {
    setValue,
    getValues,
    watch,
    formState: { errors },
    handleSubmit,
  } = methods;

  watch("nickname");
  const nickname = getValues("nickname");

  useEffect(() => {
    if (!oauthId) {
      replace(PATH.LOGIN.stack, {}, { animate: false });
      return;
    }
    setValue("oauthId", Number(oauthId));
  }, [oauthId, replace, setValue]);

  const handleNextStep = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(POSITION_WORKING_YEAR_STEP);
  }, []);

  const { selected: selectedPosition, onChangeOnly: onChangeOnlyPosition } = useMultiselect([]);
  const { selected: selectedWorkingYear, onChangeOnly: onChangeOnlyWorkingYear } = useMultiselect([]);

  const handleSignUp = handleSubmit(async (formData) => {
    const body = {
      ...formData,
      position: selectedPosition[0] as PositionType,
      workingYear: selectedWorkingYear[0] as WorkingYearType,
    };
    try {
      const { data } = await signUp(body);
      if (data.accessToken) {
        sessionStorage.setItem(ACCESS_TOKEN, data.accessToken);
        setStep(SIGN_UP_FINISH);
        return;
      }

      replace(PATH.LOGIN.stack, {});
    } catch {
      alert("회원가입 도중 에러가 발생했습니다.");
    }
  });

  if (step === NICKNAME_STEP) {
    return (
      <StackLayout isHide>
        <FormProvider {...methods}>
          <Header useBack bgColor />
          <form onSubmit={handleNextStep}>
            <S.SignUpWrap>
              <S.SignUpTit>
                닉네임을
                <br />
                입력해 주세요
              </S.SignUpTit>
              <S.SignUpSubTit>다른 사용자에게 공개되는 닉네임이며 변경할 수 있어요.</S.SignUpSubTit>
              <S.SignUpInputWrap>
                <Input placeholder="닉네임 입력" count={nickname.length ?? 0} maxLength={8} />
              </S.SignUpInputWrap>
            </S.SignUpWrap>
            <Button
              type="submit"
              size="lg"
              bgColor="black"
              disabled={!!errors?.nickname || getValues("nickname").length < 2}
            >
              다음
            </Button>
          </form>
        </FormProvider>
      </StackLayout>
    );
  }

  if (step === POSITION_WORKING_YEAR_STEP) {
    return (
      <StackLayout isHide>
        <Header useBack bgColor />
        <form onSubmit={handleSignUp}>
          <S.SignUpWrap>
            <S.SignUpTit>직무를 입력해 주세요</S.SignUpTit>
            <S.SignUpSubTit>직무에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
            <S.ChekBoxWrap>
              <CheckBox
                selectedItemIds={selectedPosition}
                onChange={onChangeOnlyPosition}
                items={positionList?.data.response.map((each) => ({ id: each.name, label: each.content })) ?? []}
              />
            </S.ChekBoxWrap>
            <S.SignUpTit>경력을 입력해 주세요</S.SignUpTit>
            <S.SignUpSubTit>연차에 따른 워크챗 탐색을 쉽게 할 수 있어요.</S.SignUpSubTit>
            <S.ChekBoxWrap>
              <CheckBox
                selectedItemIds={selectedPosition}
                onChange={onChangeOnlyWorkingYear}
                items={workingYearList?.data.response.map((each) => ({ id: each.name, label: each.content })) ?? []}
              />
            </S.ChekBoxWrap>
          </S.SignUpWrap>
          <Button
            size="lg"
            bgColor="black"
            disabled={!selectedPosition.length || !selectedWorkingYear.length}
            type="submit"
          >
            다음
          </Button>
        </form>
      </StackLayout>
    );
  }

  if (step === SIGN_UP_FINISH) {
    return (
      <S.SignUpFinish>
        <S.FinishTxt>
          축하합니다!
          <br />
          이제 워케이션을 떠나볼까요?
        </S.FinishTxt>
        <Button size="lg" bgColor="black" onClick={() => replace(PATH.MAP.stack, {})}>
          시작하기
        </Button>
      </S.SignUpFinish>
    );
  }

  return null;
};

export default SignUpPage;
