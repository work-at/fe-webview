import ModalContainerPortal from "@/components/@layout/ModalContainer/ModalContainer";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import EmailInput from "@/components/@shared/EmailInput";
import Lottie from "@/components/@shared/Lottie/Lottie.component";
import { QUERY_NAME } from "@/constants";
import { useEmailVerificationCountRemainQuery, useVerifyEmailMutation } from "@/domains/auth/auth.api";
import { useFlow } from "@/stack";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import * as S from "./EmailVerification.styled";

const EMAIL_LENGTH_LIMIT = 100;

const SUCCESS_TEXT = {
  EMAIL_SEND: "인증 이메일이 전송되었습니다!",
} as const;

const ERROR_TEXT = {
  INPUT_COUNT_LIMIT_REMAINED: (remainCount: number) =>
    remainCount === 0
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
  const queryClient = useQueryClient();
  const { mutateAsync: verifyEmail, isSuccess, isLoading } = useVerifyEmailMutation();
  const { data, refetch: renewEmailVerificationRemain } = useEmailVerificationCountRemainQuery();
  const { pop } = useFlow();

  const emailVerificationCountRemain = data?.remain;

  const handleFormSubmit = handleSubmit((formData) => {
    if (emailVerificationCountRemain === undefined || emailVerificationCountRemain === 0) {
      return;
    }

    verifyEmail(formData.email);
    renewEmailVerificationRemain();
  });

  const [focused, setFocused] = useState(false);

  const handleSetFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleUnsetFocus = useCallback(() => {
    setFocused(false);
  }, []);

  const handleConfirmButtonClick = useCallback(() => {
    queryClient.invalidateQueries([QUERY_NAME.GET_USER_INFO]);
    pop();
  }, [queryClient, pop]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(true);

      setTimeout(() => {
        setIsModalOpen(false);
        pop();
      }, 3000);
    }
  }, [isSuccess, pop]);

  if (isLoading) {
    return (
      <StackLayout isHide>
        <Lottie source={require("@/assets/loading.json")} speed={2} />
      </StackLayout>
    );
  }

  return (
    <StackLayout>
      <ModalContainerPortal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        메일을 확인해주세요!
      </ModalContainerPortal>
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
            onFocus={handleSetFocus}
            onBlur={handleUnsetFocus}
          />
        </S.SignUpInputWrap>
        {errors.email && <S.ErrorTxt>{errors.email.message}</S.ErrorTxt>}
        {emailVerificationCountRemain === 0 && (
          <S.ErrorTxt>{ERROR_TEXT.INPUT_COUNT_LIMIT_REMAINED(emailVerificationCountRemain)}</S.ErrorTxt>
        )}
        {isSuccess && <S.SuccessTxt>{SUCCESS_TEXT.EMAIL_SEND}</S.SuccessTxt>}
      </S.SignUpWrap>
      {!focused && (
        <Button type="button" disabled={isSuccess} onClick={handleConfirmButtonClick} size="lg" bgColor="black">
          {isSuccess ? "메일 전송 완료" : "확인"}
        </Button>
      )}
    </StackLayout>
  );
};

export default EmailVerification;
