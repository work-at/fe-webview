import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import EmailInput from "@/components/@shared/EmailInput";
import { useEmailVerificationCountRemainQuery, useVerifyEmailMutation } from "@/domains/auth/auth.api";
import { useForm } from "react-hook-form";
import * as S from "./EmailVerification.styled";

const EMAIL_LENGTH_LIMIT = 100;

const SUCCESS_TEXT = {
  EMAIL_SEND: "인증 이메일이 전송되었습니다!",
} as const;

const ERROR_TEXT = {
  INPUT_COUNT_LIMIT_REMAINED: (remainCount: number) =>
    remainCount >= 5
      ? "인증 메일 발송횟수를 초과해 인증이 불가합니다. (5/5)\n24시간 후 다시 시도하실 수 있습니다."
      : `${remainCount}의 입력 횟수가 남았습니다`,
  EMAIL_LENGTH_LIMIT_EXCEEDED: `이메일은 ${EMAIL_LENGTH_LIMIT}자 이상을 입력하실 수 없습니다.`,
  DUPLICATED_EMAIL: "중복된 이메일이 존재합니다",
};

// eslint-disable-next-line no-useless-escape
const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const EmailVerification = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<{ email: string }>({
    mode: "onChange",
  });

  const { mutateAsync: verifyEmail, isSuccess } = useVerifyEmailMutation();
  const { data, refetch: renewEmailVerificationRemain } = useEmailVerificationCountRemainQuery();

  const emailVerificationCountRemain = data?.remain;

  const handleFormSubmit = handleSubmit((formData) => {
    if (!emailVerificationCountRemain || emailVerificationCountRemain >= 5) {
      return;
    }

    verifyEmail(formData.email);
    renewEmailVerificationRemain();
  });

  return (
    <StackLayout>
      <S.SignUpWrap onSubmit={handleFormSubmit}>
        <S.SignUpTit>
          회사 이메일을
          <br />
          입력해 주세요
        </S.SignUpTit>
        <S.SignUpSubTit>회사 인증을 완료하면 워크챗 성사 확률이 높아져요.</S.SignUpSubTit>
        <S.SignUpInputWrap>
          <EmailInput
            isActive={isValid}
            placeholder="이메일 입력"
            {...register("email", {
              required: true,
              maxLength: {
                value: EMAIL_LENGTH_LIMIT,
                message: ERROR_TEXT.EMAIL_LENGTH_LIMIT_EXCEEDED,
              },
              validate: (value) => (emailRegExp.test(value) ? true : "이메일 형식에 맞지 않습니다."),
            })}
          />
        </S.SignUpInputWrap>
        {errors.email && <S.ErrorTxt>{errors.email.message}</S.ErrorTxt>}
        {emailVerificationCountRemain && emailVerificationCountRemain >= 5 && (
          <S.ErrorTxt>{ERROR_TEXT.INPUT_COUNT_LIMIT_REMAINED(data.remain)}</S.ErrorTxt>
        )}
        {isSuccess && <S.SuccessTxt>{SUCCESS_TEXT.EMAIL_SEND}</S.SuccessTxt>}
      </S.SignUpWrap>
      <Button type="submit" size="lg" bgColor="black">
        확인
      </Button>
    </StackLayout>
  );
};

export default EmailVerification;
