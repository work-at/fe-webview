import axios, { AxiosError, AxiosResponse } from "axios";
import { MutationFunction, QueryFunction, useMutation, useQuery } from "react-query";
import axiosRetry from "axios-retry";
import { API_URL, QUERY_NAME } from "@/constants";

import * as DTO from "./auth.dto";
import * as Action from "./auth.action";

import { baseInstance } from "@/services";

export const requestPostLogin: MutationFunction<AxiosResponse<DTO.LoginResponse>, DTO.LoginRequest> = async (
  auth: DTO.LoginRequest
) => {
  return await baseInstance().post<DTO.LoginRequest, AxiosResponse<DTO.LoginResponse>>(API_URL.POST_LOIGN, auth);
};

export const useLoginMutation = () => {
  return useMutation<AxiosResponse<DTO.LoginResponse>, AxiosError<{ message: string }>, DTO.LoginRequest>({
    mutationFn: requestPostLogin,
  });
};

export const requestPostSignUp: MutationFunction<AxiosResponse<DTO.SignUpResponse>, DTO.SignUpRequest> = async (
  auth: DTO.SignUpRequest
) => {
  return await baseInstance().post<DTO.SignUpRequest, AxiosResponse<DTO.SignUpResponse>>(API_URL.POST_SIGNUP, auth);
};

export const useSignUpMutation = () => {
  return useMutation<AxiosResponse<DTO.SignUpResponse>, AxiosError<{ message: string }>, DTO.SignUpRequest>({
    mutationFn: requestPostSignUp,
  });
};

export const requestValidateNickname = async (nickname: string) => {
  axiosRetry(axios, { retries: 3 });
  return await baseInstance().get<DTO.ValidateNicknameRequest, DTO.ValidateNicknameResponse>(
    API_URL.GET_VALIDATE_NICKNAME(nickname)
  );
};

// TODO: 추후 확정되면 삭제
// type NicknameValidateQueryKey = readonly [typeof QUERY_NAME.VALIDATE_NICKNAME, DTO.ValidateNicknameRequest];

// export const requestValidateNickname: QueryFunction<DTO.ValidateNicknameResponse> = async ({ queryKey }) => {
//   const [, { nickname }] = queryKey as NicknameValidateQueryKey;

//   return await baseInstance().get<DTO.ValidateNicknameRequest, DTO.ValidateNicknameResponse>(API_URL.PATH(`user/validation?nickname=${nickname}`));
// };

// export const useValidateNicknameQuery = (nicnkname: DTO.ValidateNicknameRequest) => {
//   return useQuery<DTO.ValidateNicknameResponse, AxiosError<{ message: string }>>([QUERY_NAME.GET_TEST, nicnkname], requestValidateNickname);
// };

export const requestPositionList: QueryFunction<DTO.PositionListResponse> = async () => {
  return await baseInstance().get<unknown, DTO.PositionListResponse>(API_URL.GET_POSITION_LIST);
};

export const usePositionListQuery = () => {
  return useQuery<DTO.PositionListResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_POSITION_LIST],
    requestPositionList
  );
};

export const requestWorkingYearList: QueryFunction<DTO.WorkingYearListResponse> = async () => {
  return await baseInstance().get<unknown, DTO.WorkingYearListResponse>(API_URL.GET_WORKING_YEAR_LIST);
};

export const useWorkingYearListQuery = () => {
  return useQuery<DTO.WorkingYearListResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_WORKING_YEAR_LIST],
    requestWorkingYearList
  );
};

export const requestPostVerifyEmail: MutationFunction<void, string> = async (email: string) => {
  return await baseInstance().post(API_URL.VERIFY_EMAIL, email);
};

export const useVerifyEmailMutation = () => {
  return useMutation(requestPostVerifyEmail);
};

export const requestGetEmailVerificationCountRemain: QueryFunction<
  Action.GetEmailVerificationCountRemainInfo
> = async () => {
  const {
    data: { remain },
  } = await baseInstance().get<DTO.GetEmailVerificationCountRemainResponse>(API_URL.EMAIL_VALIDATION_COUNT_REMAIL);

  return {
    remain,
  };
};

export const useEmailVerificationCountRemainQuery = () => {
  return useQuery([QUERY_NAME.GET_EMAIL_VALIDATION_REMAIN_ATTEMPTS], requestGetEmailVerificationCountRemain);
};
