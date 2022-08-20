import { useFormContext } from "react-hook-form";
import Button from "@/components/@shared/Button/Button";
import { requestValidateNickname } from "@/domains/auth/auth.api";
import { SignUpRequest } from "@/domains/auth/auth.dto";
import { useDebounce } from "@/hooks";
import * as S from "./Input.styled";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  count?: number;
}

const Input = ({ count, ...props }: InputProps) => {
  const {
    register,
    setValue,
    getValues,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useFormContext<SignUpRequest>();

  watch("nickname");

  const handleCheckDuplicate = async () => {
    try {
      const { data: isDuplicate } = await requestValidateNickname(getValues("nickname"));
      if (isDuplicate) {
        setError("nickname", { type: "duplicate" });
        return;
      }
      clearErrors();
      (document?.activeElement as any)?.blur();
    } catch {
      setError("nickname", { type: "serverResponse" });
    }
  };

  const handleOnChange = useDebounce((isValidate) => {
    if (!isValidate) {
      setError("nickname", { type: "validate" });
      return;
    }
    if (getValues("nickname").length > 1) {
      setError("nickname", { type: "checkDuplicate" });
      return;
    }
    setError("nickname", { type: "minLength" });
  }, 150);

  return (
    <S.InputWrap>
      <S.InputCount>
        <S.CountTxt>{count}</S.CountTxt>/8
      </S.InputCount>
      <S.InputBox>
        <S.Input
          type="text"
          {...props}
          {...register("nickname", {
            required: "입력해주세요.",
            min: 2,
            max: 8,
          })}
          onChange={(e) => {
            const regex = new RegExp(/^[0-9a-zA-Z가-힣\x20]*$/gi);
            const value = e.target.value.replace(" ", "");
            setValue("nickname", value);

            handleOnChange(regex.test(value));
          }}
        />
        <Button
          type="button"
          size="sm"
          round
          disabled={errors?.nickname?.type === "validate" || getValues("nickname").length < 2}
          active={!(errors?.nickname?.type === "validate" || getValues("nickname").length < 2)}
          onClick={handleCheckDuplicate}
        >
          중복확인
        </Button>
      </S.InputBox>
      {errors?.nickname?.type === "validate" && (
        <S.ErrorTxt>특수문자와 단일 자음,단일 모음, 공백은 사용할 수 없습니다.</S.ErrorTxt>
      )}
      {errors?.nickname?.type === "checkDuplicate" && <S.ErrorTxt>닉네임 중복확인을 해주세요.</S.ErrorTxt>}
      {errors?.nickname?.type === "duplicate" && <S.ErrorTxt>이미 사용중인 닉네임입니다.</S.ErrorTxt>}
      {!errors?.nickname && getValues("nickname").length > 1 && <S.SuccessTxt>사용 가능한 닉네임입니다.</S.SuccessTxt>}
    </S.InputWrap>
  );
};

export default Input;
