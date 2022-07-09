import axios, { AxiosError, AxiosResponse } from "axios";
import { MutationFunction, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosRetry from 'axios-retry';
import { ACCESS_TOKEN, API_URL } from "@/constants";

import * as DTO from "./auth.dto";

export const requestPostLogin: MutationFunction<AxiosResponse<DTO.LoginResponse>, DTO.LoginRequest> = async (auth: DTO.LoginRequest) => {
  return await axios.post<DTO.LoginRequest, AxiosResponse<DTO.LoginResponse>>(API_URL.PATH(`auth/token/kakao`),
    auth,
  );
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation<AxiosResponse<DTO.LoginResponse>, AxiosError<{ message: string }>, DTO.LoginRequest>({
    mutationFn: requestPostLogin,
    onSuccess: ({ data }) => {
      if (data.code === 'WORK01') {
        navigate('/map')
      }

      if (data.code === 'WORK02') {
        navigate('/sign-up', { state: data })
      }
    }
  });
};

export const requestPostSignUp: MutationFunction<AxiosResponse<DTO.SignUpResponse>, DTO.SignUpRequest> = async (auth: DTO.SignUpRequest) => {
  return await axios.post<DTO.SignUpRequest, AxiosResponse<DTO.SignUpResponse>>(API_URL.PATH(`signup`),
    auth,
  );
};

export const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation<AxiosResponse<DTO.SignUpResponse>, AxiosError<{ message: string }>, DTO.SignUpRequest>({
    mutationFn: requestPostSignUp,
    onSuccess: ({ data }) => {
      if (data.accessToken) {
        localStorage.setItem(ACCESS_TOKEN, data.accessToken);
        navigate('/map')
        return;
      }

      navigate('/login')
    }
  });
};

export const requestValidateNickname = async (nickname: string) => {
  axiosRetry(axios, { retries: 3 });
  return await axios.get<DTO.ValidateNicknameRequest, DTO.ValidateNicknameResponse>(API_URL.PATH(`user/validation?nickname=${nickname}`));
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
