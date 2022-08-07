import { AxiosError, AxiosResponse } from "axios";
import { QueryFunction, useMutation, useQuery, useQueryClient, UseQueryOptions } from "react-query";

import * as DTO from "./user.dto";
import * as Action from "./user.action";
import * as Mapper from "./user.mapper";

import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";

type UserAddressQueryKey = readonly [typeof QUERY_NAME.GET_USER_ADDRESS, Action.UserAddressCriteria];

// TODO : 실제 API 데이터 연동
const DUMMY_DATA: Action.UserAddressInfo = {
  address: "나의 위치",
  nearUserAddressCount: 7,
};

export const requestGetUserAddress: QueryFunction<Action.UserAddressInfo, UserAddressQueryKey> = async ({
  queryKey,
}) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetUserAddressPinsRequest, DTO.GetUserAddressPinsResponse>(`/UserAddresss`, {
  //     params: Mapper.a2dMapper_UserAddressPinsCriteria_GetUserAddressPinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const UserAddresss = Mapper.d2aMapper_GetUserAddressPinsResponse_UserAddressPinsInfo(data);
  //
  //   return UserAddresss;
  return DUMMY_DATA;
};

export const useUserAddressQuery = (
  criteria: Action.UserAddressCriteria,
  options: UseQueryOptions<Action.UserAddressInfo, AxiosError<string>, Action.UserAddressInfo, UserAddressQueryKey>
) => {
  return useQuery<Action.UserAddressInfo, AxiosError<string>, Action.UserAddressInfo, UserAddressQueryKey>(
    [QUERY_NAME.GET_USER_ADDRESS, criteria],
    requestGetUserAddress,
    options
  );
};

export const requestGetUserInfoBase = () => baseInstance().get<unknown, DTO.GetUserInfoResponse>(API_URL.GET_USER_LIST);

export const requestGetUserInfo: QueryFunction<DTO.GetUserInfoResponse> = async () => {
  const response = await baseInstance().get<unknown, AxiosResponse<DTO.GetUserInfoResponse>>(API_URL.GET_USER_LIST);

  return response.data;
};

export const useUserInfo = () => {
  return useQuery([QUERY_NAME.GET_USER_INFO], requestGetUserInfo);
};

export const requestUpdateUserProfile = async (command: Action.UpdateUserInfoCommand) =>
  baseInstance().put(
    API_URL.UPDATE_USER_PROFILE,
    Mapper.a2dMapper_UpdateUserInfoCommand_PutUserProfileRequest(command)
  );

export const useUpdateUserProfileMutation = () => {
  const queryClient = useQueryClient();
  // TODO : 실패 / 성공 경우 구분하기
  queryClient.invalidateQueries(QUERY_NAME.GET_USER_INFO);
  return useMutation(requestUpdateUserProfile);
};

export const requestUserLocationBlock = async () => {
  return;
};

export const useUserLocationBlockMutation = () => useMutation(requestUserLocationBlock);
