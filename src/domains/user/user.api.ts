import { AxiosError, AxiosResponse } from "axios";
import { MutationFunction, QueryFunction, useMutation, useQuery, useQueryClient, UseQueryOptions } from "react-query";

import * as DTO from "./user.dto";
import * as Action from "./user.action";
import * as Mapper from "./user.mapper";

import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";
import { MAP } from "@/constants/map";

type UserAddressQueryKey = readonly [typeof QUERY_NAME.GET_USER_ADDRESS, Action.UserAddressCriteria];

export const requestGetUserAddress: QueryFunction<Action.UserAddressInfo, UserAddressQueryKey> = async ({
  queryKey,
}) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().post<DTO.PostUserAddressRequest, DTO.PostUserAddressResponse>(
    "/users/address",
    Mapper.a2dMapper_UserAddressPinsCriteria_PostUserAddressRequest(criteria)
  );

  return data.data.address;
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

type NearWorkersCountQueryKey = readonly [typeof QUERY_NAME.GET_NEAR_WORKERS_COUNT];

export const requestGetNearWorkersCounting: QueryFunction<
  Action.NearWorkersCountInfo,
  NearWorkersCountQueryKey
> = async () => {
  const data = await baseInstance().get<DTO.GetNearWorkersCountingResponse>("/map/workers/counting");

  return data.data;
};

export const useNearWorkersCountQuery = (
  options: UseQueryOptions<
    Action.NearWorkersCountInfo,
    AxiosError<string>,
    Action.NearWorkersCountInfo,
    NearWorkersCountQueryKey
  >
) => {
  return useQuery<
    Action.NearWorkersCountInfo,
    AxiosError<string>,
    Action.NearWorkersCountInfo,
    NearWorkersCountQueryKey
  >([QUERY_NAME.GET_NEAR_WORKERS_COUNT], requestGetNearWorkersCounting, options);
};

export const requestPostSync: MutationFunction<void, Action.SyncUserLocationCommand> = async (command) => {
  await baseInstance().post<DTO.PostUserAddressRequest, DTO.PostUserAddressResponse>("/", {
    params: Mapper.a2dMapper_SyncUserLocationCommand_PostSync(command),
  });
};

export const useSyncUserLocationMutation = () => {
  return useMutation(requestPostSync);
};

export const requestGetUserInfoBase = () => baseInstance().get<unknown, DTO.GetUserInfoResponse>(API_URL.GET_USER_LIST);

export const requestGetUserInfo: QueryFunction<DTO.GetUserInfoResponse> = async () => {
  const response = await baseInstance().get<unknown, AxiosResponse<DTO.GetUserInfoResponse>>(API_URL.GET_USER_LIST);

  return response.data;
};

export const useUserInfo = () => {
  return useQuery([QUERY_NAME.GET_USER_INFO], requestGetUserInfo, {
    staleTime: 500000,
  });
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

export const requestUserLocationTrackingToggle = async (turnOff: boolean) => {
  await baseInstance().put(API_URL.PUT_USER_LOCATION_TRACKING, undefined, {
    params: {
      turnOff: turnOff,
    },
  });
};

export const useUserLocationTrackingToggleMutation = () => useMutation(requestUserLocationTrackingToggle);

export const requestUploadUserProfileImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  await baseInstance().post(API_URL.UPDATE_USER_PROFILE_IMAGE, formData);
};

export const useUploadUserProfileImageMutation = () => useMutation(requestUploadUserProfileImage);
