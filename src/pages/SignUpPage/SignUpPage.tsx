import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { ACCESS_TOKEN, PATH } from "@/constants";
import { usePositionListQuery, useSignUpMutation, useWorkingYearListQuery } from "@/domains/auth/auth.api";
import { SignUpRequest } from "@/domains/auth/auth.dto";
import { POSITION, WORKING_YEAR } from "@/domains/auth/auth.text";
import { useFlow } from "@/stack";
import { useActivityParams } from "@stackflow/react";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NICKNAME_STEP = 0;
const POSITION_WORKING_YEAR_STEP = 1;

const SignUpPage = () => {
  const [step, setStep] = useState(NICKNAME_STEP);
  const { oauthId } = useActivityParams();

  const { push } = useFlow();
  const { mutateAsync: signUp } = useSignUpMutation();

  const { data: positionList } = usePositionListQuery();
  const { data: workingYearList } = useWorkingYearListQuery();

  const {
    setValue,
    getValues,
    register,
    watch,
    formState: { errors },
    setError,
    clearErrors,
    handleSubmit,
  } = useForm<SignUpRequest>({
    defaultValues: {
      nickname: "",
      oauthType: "KAKAO",
    },
  });

  const nickname = watch("nickname");

  useEffect(() => {
    if (!oauthId) {
      push(PATH.LOGIN.stack, {});
      return;
    }
    setValue("oauthId", Number(oauthId));
  }, []);

  useEffect(() => {
    if (nickname) {
      clearErrors();
    }
  }, [nickname]);

  const handleNextStep = useCallback(
    async (e: any) => {
      e.preventDefault();
      // TODO: 추후에 API 고쳐지면 수정
      // try {
      //   const { data: isDuplicate } = await requestValidateNickname(encodeURIComponent(nickname));
      //   if (!isDuplicate) {
      //     setError('nickname', { type: "duplicate", message: '중복됩니다.' })
      //     return;
      //   }
      // } catch {
      //   setError('nickname', { type: "duplicate", message: '중복됩니다.' })
      //   return;
      // }

      if (nickname) {
        setStep(POSITION_WORKING_YEAR_STEP);
        return;
      }

      setError("nickname", { type: "required", message: "입력해주세요." });
    },
    [nickname]
  );

  const handleSignUp = handleSubmit(async (formData) => {
    try {
      const { data } = await signUp(formData);
      if (data.accessToken) {
        sessionStorage.setItem(ACCESS_TOKEN, data.accessToken);
        push(PATH.MAP.stack, {});
        return;
      }

      push(PATH.LOGIN.stack, {});
    } catch {
      alert("회원가입 도중 에러가 발생했습니다.");
    }
  });

  if (step === NICKNAME_STEP) {
    return (
      <form onSubmit={handleNextStep}>
        <input
          {...register("nickname", {
            required: "입력해주세요.",
            min: 2,
            max: 8,
            pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
          })}
        />
        <div>{errors.nickname?.message}</div>
        <button type="submit">next</button>
      </form>
    );
  }

  if (step === POSITION_WORKING_YEAR_STEP) {
    return (
      <StackLayout>
        <form onSubmit={handleSignUp}>
          <select
            defaultValue=""
            {...register("position", { required: "선택해주세요" })}
            value={POSITION[getValues("position") ?? ""]}
          >
            <option hidden value="">
              직무 선택
            </option>
            {positionList?.data.response.map(({ name, content }) => (
              <option value={name} key={name}>
                {content}
              </option>
            ))}
          </select>
          <div>{errors.position?.message}</div>
          <br></br>
          <select
            defaultValue=""
            {...register("workingYear", { required: "선택해주세요" })}
            value={WORKING_YEAR[getValues("workingYear") ?? ""]}
          >
            <option hidden value="">
              경력 선택
            </option>
            {workingYearList?.data.response.map(({ name, content }) => (
              <option value={name} key={name}>
                {content}
              </option>
            ))}
          </select>
          <div>{errors.workingYear?.message}</div>
          <button type="submit">가입</button>
        </form>
      </StackLayout>
    );
  }

  return null;
};

export default SignUpPage;
