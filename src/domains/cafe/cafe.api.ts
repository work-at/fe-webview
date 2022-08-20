import { AxiosError, AxiosResponse } from "axios";
import { MutationFunction, QueryFunction, useMutation, useQuery, useQueryClient, UseQueryOptions } from "react-query";

import * as DTO from "./cafe.dto";
import * as Action from "./cafe.action";
import * as Mapper from "./cafe.mapper";

import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";

type CafePinsQueryKey = readonly [typeof QUERY_NAME.GET_CAFE_PINS, Action.CafePinsCriteria];

export const requestGetCafePins: QueryFunction<Action.CafePinsInfo, CafePinsQueryKey> = async ({ queryKey }) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().get<DTO.GetCafePinsRequest, DTO.GetCafePinsResponse>("map/cafes/pin", {
    params: Mapper.a2dMapper_CafePinsCriteria_GetCafePinsRequest(criteria),
  });

  const cafePins = Mapper.d2aMapper_GetCafePinsResponse_CafePinsInfo(data);

  return cafePins;
};

export const useCafePinsQuery = (
  criteria: Action.CafePinsCriteria,
  options: UseQueryOptions<Action.CafePinsInfo, AxiosError<string>, Action.CafePinsInfo, CafePinsQueryKey>
) => {
  return useQuery<Action.CafePinsInfo, AxiosError<string>, Action.CafePinsInfo, CafePinsQueryKey>(
    [QUERY_NAME.GET_CAFE_PINS, criteria],
    requestGetCafePins,
    options
  );
};

type CafeDetailQueryKey = readonly [typeof QUERY_NAME.GET_CAFE_DETAIL, Action.CafeDetailCriteria];

export const requestGetCafeDetail: QueryFunction<Action.CafeDetailInfo, CafeDetailQueryKey> = async ({ queryKey }) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().get<void, DTO.GetCafeDetailResponse>(`map/cafes/${criteria.id}`);

  const cafeDetail = Mapper.d2aMapper_GetCafeDetailResponse_CafeDetailInfo(data);

  return cafeDetail;
};

// TODO : Suspense 가 true 인 경우 무조건 true 가 나오도록 설정하기. isLoading 제거하
export const useCafeDetailQuery = (
  criteria: Action.CafeDetailCriteria,
  options: UseQueryOptions<Action.CafeDetailInfo, AxiosError<string>, Action.CafeDetailInfo, CafeDetailQueryKey>
) => {
  return useQuery<Action.CafeDetailInfo, AxiosError<string>, Action.CafeDetailInfo, CafeDetailQueryKey>(
    [QUERY_NAME.GET_CAFE_DETAIL, criteria],
    requestGetCafeDetail,
    options
  );
};

export const requestCafeReviewList: QueryFunction<DTO.GetCafeReviewTypeResponse> = async () => {
  return await baseInstance().get<unknown, DTO.GetCafeReviewTypeResponse>(API_URL.GET_CAFE_REVIEW_LIST);
};

export const useCafeReviewListQuery = () => {
  return useQuery<DTO.GetCafeReviewTypeResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_CAFE_REVIEW_LIST],
    requestCafeReviewList,
    { staleTime: Infinity, cacheTime: Infinity, keepPreviousData: true }
  );
};

export const requestPostCafeReview: MutationFunction<AxiosResponse<null>, DTO.PostCafeReviewRequest> = async ({
  reviewTypeNames,
  locationId,
}: DTO.PostCafeReviewRequest) => {
  return await baseInstance().post<DTO.PostCafeReviewRequest, AxiosResponse<null>>(
    API_URL.POST_CAFE_REVIEW(locationId),
    { reviewTypeNames }
  );
};

export const usePostCafeReview = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<null>, AxiosError<{ message: string }>, DTO.PostCafeReviewRequest>({
    mutationFn: requestPostCafeReview,
    onSuccess: (_, request) => queryClient.invalidateQueries([QUERY_NAME.GET_CAFE_DETAIL, { id: request.locationId }]),
  });
};

type CafesQueryKey = readonly [typeof QUERY_NAME.GET_CAFES, Action.CafesCriteria];

export const requestGetCafes: QueryFunction<Action.CafesInfo, CafesQueryKey> = async ({ queryKey }) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().get<DTO.GetCafesRequest, DTO.GetCafesResponse>("/map/cafes", {
    params: Mapper.a2dMapper_CafesCriteria_GetCafesRequest(criteria),
  });

  const cafes = Mapper.d2aMapper_GetCafesResponse_CafesInfo(data);

  return cafes;
};

// TODO : Suspense 가 true 인 경우 무조건 true 가 나오도록 설정하기. isLoading 제거하ㄱ
export const useCafesQuery = (
  criteria: Action.CafesCriteria,
  options: UseQueryOptions<Action.CafesInfo, AxiosError<string>, Action.CafesInfo, CafesQueryKey>
) => {
  return useQuery<Action.CafesInfo, AxiosError<string>, Action.CafesInfo, CafesQueryKey>(
    [QUERY_NAME.GET_CAFES, criteria],
    requestGetCafes,
    options
  );
};
