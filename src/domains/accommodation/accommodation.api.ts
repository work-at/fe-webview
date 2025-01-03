import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";
import { QueryFunction, useMutation, useQuery, useQueryClient, UseQueryOptions } from "react-query";

import * as DTO from "./accommodation.dto";
import { AxiosError } from "axios";
import { AccommodationReviewCommand } from "./accommodation.action";

type AccommodationListQueryKey = readonly [typeof QUERY_NAME.GET_ACCOMMODATION_LIST, DTO.GetAccommodationListRequest];

const requestAccommodationList: QueryFunction<DTO.Accommodation[], AccommodationListQueryKey> = async ({
  queryKey,
}) => {
  const [, criteria] = queryKey;

  const items = await baseInstance().get<unknown, DTO.GetAccommodationListResponse>(API_URL.GET_ACCOMMODATION_LIST, {
    params: criteria,
  });

  return items.data.accommodations;
};

export const useAccommodationListQuery = (
  criteria: DTO.GetAccommodationListRequest,
  options: UseQueryOptions<DTO.Accommodation[], AxiosError<string>, DTO.Accommodation[], AccommodationListQueryKey>
) => {
  return useQuery<DTO.Accommodation[], AxiosError<string>, DTO.Accommodation[], AccommodationListQueryKey>(
    [QUERY_NAME.GET_ACCOMMODATION_LIST, criteria],
    requestAccommodationList,
    options
  );
};

type AccommodationListByNameQueryKey = readonly [
  typeof QUERY_NAME.GET_ACCOMMODATION_LIST_BY_NAME,
  DTO.GetAccommodationListByNameRequest
];

export const requestAccommodationListByName: QueryFunction<
  DTO.Accommodation[],
  AccommodationListByNameQueryKey
> = async ({ queryKey }) => {
  const [, criteria] = queryKey;

  const items = await baseInstance().get<unknown, DTO.GetAccommodationListByNameResponse>(
    API_URL.GET_ACCOMMODATION_LIST_BY_NAME,
    {
      params: criteria,
    }
  );

  return items.data;
};

export const useAccommodationListByNameQuery = (
  criteria: DTO.GetAccommodationListByNameRequest,
  options?: UseQueryOptions<
    DTO.Accommodation[],
    AxiosError<string>,
    DTO.Accommodation[],
    AccommodationListByNameQueryKey
  >
) => {
  return useQuery([QUERY_NAME.GET_ACCOMMODATION_LIST_BY_NAME, criteria], requestAccommodationListByName, options);
};

const requestAccommodationReviewTags = async () => {
  return await baseInstance().get<unknown, DTO.Accommodation[]>(API_URL.GET_ACCOMMODATION_LIST);
};

export const useAccommodationReviewTagsQuery = (options: UseQueryOptions<DTO.Accommodation[]>) => {
  return useQuery<DTO.Accommodation[]>(
    [QUERY_NAME.GET_ACCOMMODATION_REVIEW_TAGS],
    requestAccommodationReviewTags,
    options
  );
};

type AccommodationDetailQueryKey = readonly [
  typeof QUERY_NAME.GET_ACCOMMODATION_DETAIL,
  DTO.GetAccommodationDetailRequest
];

const requestAccommodationDetail: QueryFunction<
  DTO.GetAccommodationDetailResponse,
  AccommodationDetailQueryKey
> = async ({ queryKey }) => {
  const [, criteria] = queryKey;

  return await baseInstance().get<unknown, DTO.GetAccommodationDetailResponse>(
    API_URL.GET_ACCOMMODATION_DETAIL(criteria.accommodationId)
  );
};

export const useAccommodationDetailQuery = (
  criteria: DTO.GetAccommodationDetailRequest,
  options: UseQueryOptions<
    DTO.GetAccommodationDetailResponse,
    AxiosError<string>,
    DTO.GetAccommodationDetailResponse,
    AccommodationDetailQueryKey
  >
) => {
  return useQuery<
    DTO.GetAccommodationDetailResponse,
    AxiosError<string>,
    DTO.GetAccommodationDetailResponse,
    AccommodationDetailQueryKey
  >([QUERY_NAME.GET_ACCOMMODATION_DETAIL, criteria], requestAccommodationDetail, options);
};

const requestReviewAccommodation = async (criteria: AccommodationReviewCommand) => {
  return await baseInstance().post(API_URL.GET_ACCOMMODATION_REVIEW(criteria.accommodationId), {
    tagNames: criteria.tags,
  });
};

export const useReviewAccommodationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(requestReviewAccommodation, {
    onSuccess: (_, request) => {
      queryClient.invalidateQueries([QUERY_NAME.GET_ACCOMMODATION_DETAIL, { id: request.accommodationId }]);
    },
  });
};

type RegionTrafficQueryKey = readonly [typeof QUERY_NAME.GET_REGION_TRAFFIC, DTO.RegionTrafficRequest];

export const requestRegionTraffic: QueryFunction<DTO.RegionTrafficResponse, RegionTrafficQueryKey> = async ({
  queryKey,
}) => {
  const [, { region }] = queryKey;

  return await baseInstance().get<unknown, DTO.RegionTrafficResponse>(API_URL.GET_REGION_TRAFFIC(region));
};

export const useRegionTrafficQuery = (region: DTO.RegionTrafficRequest) => {
  return useQuery<
    DTO.RegionTrafficResponse,
    AxiosError<{ message: string }>,
    DTO.RegionTrafficResponse,
    RegionTrafficQueryKey
  >([QUERY_NAME.GET_REGION_TRAFFIC, region], requestRegionTraffic);
};

export const requestAccommodationCuration: QueryFunction<DTO.AccommodationCurationResponse> | any = async () => {
  return await baseInstance().get<unknown, DTO.AccommodationCurationResponse>(API_URL.GET_ACCOMMODATION_CURATION);
};

export const useAccommodationCurationQuery = () => {
  return useQuery<DTO.AccommodationCurationResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_ACCOMMODATION_CURATION],
    requestAccommodationCuration
  );
};

export const requestAccommodationReviewList: QueryFunction<DTO.GetAccommodationReviewTypeResponse> = async () => {
  return await baseInstance().get<unknown, DTO.GetAccommodationReviewTypeResponse>(
    API_URL.GET_ACCOMMODATION_REVIEW_LIST
  );
};

export const useAccommodationReviewListQuery = () => {
  return useQuery<DTO.GetAccommodationReviewTypeResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_ACCOMMODATION_REVIEW_LIST],
    requestAccommodationReviewList,
    { staleTime: Infinity, cacheTime: Infinity, keepPreviousData: true }
  );
};
