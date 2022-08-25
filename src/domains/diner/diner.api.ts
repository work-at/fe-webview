import { AxiosError, AxiosResponse } from "axios";
import { MutationFunction, QueryFunction, useMutation, useQuery, useQueryClient, UseQueryOptions } from "react-query";

import * as DTO from "./diner.dto";
import * as Action from "./diner.action";
import * as Mapper from "./diner.mapper";

import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";

type DinerPinsQueryKey = readonly [typeof QUERY_NAME.GET_DINER_PINS, Action.DinerPinsCriteria];

export const requestGetDinerPins: QueryFunction<Action.DinerPinsInfo, DinerPinsQueryKey> = async ({ queryKey }) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().get<DTO.GetDinerPinsRequest, DTO.GetDinerPinsResponse>("map/restaurants/pin", {
    params: Mapper.a2dMapper_DinerPinsCriteria_GetDinerPinsRequest(criteria),
  });

  const dinerPins = Mapper.d2aMapper_GetDinerPinsResponse_DinerPinsInfo(data);

  return dinerPins;
};

export const useDinerPinsQuery = (
  criteria: Action.DinerPinsCriteria,
  options: UseQueryOptions<Action.DinerPinsInfo, AxiosError<string>, Action.DinerPinsInfo, DinerPinsQueryKey>
) => {
  return useQuery<Action.DinerPinsInfo, AxiosError<string>, Action.DinerPinsInfo, DinerPinsQueryKey>(
    [QUERY_NAME.GET_DINER_PINS, criteria],
    requestGetDinerPins,
    options
  );
};

type DinerDetailQueryKey = readonly [typeof QUERY_NAME.GET_DINER_DETAIL, Action.DinerDetailCriteria];

export const requestGetDinerDetail: QueryFunction<Action.DinerDetailInfo, DinerDetailQueryKey> = async ({
  queryKey,
}) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().get<void, DTO.GetDinerDetailResponse>(`map/restaurants/${criteria.id}`);

  const dinerDetail = Mapper.d2aMapper_GetDinerDetailResponse_DinerDetailInfo(data);

  return dinerDetail;
};

export const useDinerDetailQuery = (
  criteria: Action.DinerDetailCriteria,
  options: UseQueryOptions<Action.DinerDetailInfo, AxiosError<string>, Action.DinerDetailInfo, DinerDetailQueryKey>
) => {
  return useQuery<Action.DinerDetailInfo, AxiosError<string>, Action.DinerDetailInfo, DinerDetailQueryKey>(
    [QUERY_NAME.GET_DINER_DETAIL, criteria],
    requestGetDinerDetail,
    options
  );
};

export const requestDinerReviewList: QueryFunction<DTO.GetDinerReviewTypeResponse> = async () => {
  return await baseInstance().get<unknown, DTO.GetDinerReviewTypeResponse>(API_URL.GET_DINER_REVIEW_LIST);
};

export const useDinerReviewListQuery = () => {
  return useQuery<DTO.GetDinerReviewTypeResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_DINER_REVIEW_LIST],
    requestDinerReviewList,
    { staleTime: Infinity, cacheTime: Infinity, keepPreviousData: true }
  );
};

export const requestPostDinerReview: MutationFunction<AxiosResponse<null>, DTO.PostDinerReviewRequest> = async ({
  reviewTypeNames,
  locationId,
}: DTO.PostDinerReviewRequest) => {
  return await baseInstance().post<DTO.PostDinerReviewRequest, AxiosResponse<null>>(
    API_URL.POST_DINER_REVIEW(locationId),
    { reviewTypeNames }
  );
};

export const usePostDinerReview = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<null>, AxiosError<{ message: string }>, DTO.PostDinerReviewRequest>({
    mutationFn: requestPostDinerReview,
    onSuccess: (_, request) => {
      queryClient.invalidateQueries([QUERY_NAME.GET_DINER_DETAIL, { id: request.locationId }]);
      queryClient.invalidateQueries([QUERY_NAME.GET_DINERS]);
    },
  });
};

type DinersQueryKey = readonly [typeof QUERY_NAME.GET_DINERS, Action.DinersCriteria];

export const requestGetDiners: QueryFunction<Action.DinersInfo, DinersQueryKey> = async ({ queryKey }) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().get<DTO.GetDinersRequest, DTO.GetDinersResponse>("/map/restaurants", {
    params: Mapper.a2dMapper_DinersCriteria_GetDinersRequest(criteria),
  });

  const diners = Mapper.d2aMapper_GetDinersResponse_DinersInfo(data);

  return diners;
};

// TODO : Suspense 가 true 인 경우 무조건 true 가 나오도록 설정하기. isLoading 제거하ㄱ
export const useDinersQuery = (
  criteria: Action.DinersCriteria,
  options: UseQueryOptions<Action.DinersInfo, AxiosError<string>, Action.DinersInfo, DinersQueryKey>
) => {
  return useQuery<Action.DinersInfo, AxiosError<string>, Action.DinersInfo, DinersQueryKey>(
    [QUERY_NAME.GET_DINERS, criteria],
    requestGetDiners,
    options
  );
};
