import axios, { AxiosError, AxiosResponse } from "axios";
import { MutationFunction, QueryFunction, useMutation, useQuery } from "react-query";
import axiosRetry from "axios-retry";
import { API_URL, QUERY_NAME } from "@/constants";

import * as DTO from "./auth.dto";

export const requestPostLogin: MutationFunction<AxiosResponse<DTO.LoginResponse>, DTO.LoginRequest> = async (
  auth: DTO.LoginRequest
) => {
  return await axios.post<DTO.LoginRequest, AxiosResponse<DTO.LoginResponse>>(API_URL.PATH(`auth/token/kakao`), auth);
};

export const useLoginMutation = () => {
  return useMutation<AxiosResponse<DTO.LoginResponse>, AxiosError<{ message: string }>, DTO.LoginRequest>({
    mutationFn: requestPostLogin,
  });
};

export const requestPostSignUp: MutationFunction<AxiosResponse<DTO.SignUpResponse>, DTO.SignUpRequest> = async (
  auth: DTO.SignUpRequest
) => {
  return await axios.post<DTO.SignUpRequest, AxiosResponse<DTO.SignUpResponse>>(API_URL.PATH(`signup`), auth);
};

export const useSignUpMutation = () => {
  return useMutation<AxiosResponse<DTO.SignUpResponse>, AxiosError<{ message: string }>, DTO.SignUpRequest>({
    mutationFn: requestPostSignUp,
  });
};

export const requestValidateNickname = async (nickname: string) => {
  axiosRetry(axios, { retries: 3 });
  return await axios.get<DTO.ValidateNicknameRequest, DTO.ValidateNicknameResponse>(
    API_URL.PATH(`user/validation?nickname=${nickname}`)
  );
};

// TODO: 추후 확정되면 삭제
// type NicknameValidateQueryKey = readonly [typeof QUERY_NAME.VALIDATE_NICKNAME, DTO.ValidateNicknameRequest];

// export const requestValidateNickname: QueryFunction<DTO.ValidateNicknameResponse> = async ({ queryKey }) => {
//   const [, { nickname }] = queryKey as NicknameValidateQueryKey;

//   return await axios.get<DTO.ValidateNicknameRequest, DTO.ValidateNicknameResponse>(API_URL.PATH(`user/validation?nickname=${nickname}`));
// };

// export const useValidateNicknameQuery = (nicnkname: DTO.ValidateNicknameRequest) => {
//   return useQuery<DTO.ValidateNicknameResponse, AxiosError<{ message: string }>>([QUERY_NAME.GET_TEST, nicnkname], requestValidateNickname);
// };

export const requestPositionList: QueryFunction<DTO.PositionListResponse> = async () => {
  return await axios.get<unknown, DTO.PositionListResponse>(API_URL.PATH(`user/job-department`));
};

export const usePositionListQuery = () => {
  return useQuery<DTO.PositionListResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_POSITION_LIST],
    requestPositionList
  );
};

export const requestWorkingYearList: QueryFunction<DTO.WorkingYearListResponse> = async () => {
  return await axios.get<unknown, DTO.WorkingYearListResponse>(API_URL.PATH(`user/job-duration`));
};

export const useWorkingYearListQuery = () => {
  return useQuery<DTO.WorkingYearListResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_WORKING_YEAR_LIST],
    requestWorkingYearList
  );
};
