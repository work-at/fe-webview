import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";
import { QueryFunction, useMutation, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./accommodation.dto";
import { AxiosError } from "axios";
import { AccommodationReviewCommand } from "./accommodation.action";

type AccommodationListQueryKey = readonly [typeof QUERY_NAME.GET_CAFE_REVIEW_LIST, DTO.GetAccommodationListRequest];

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
    [QUERY_NAME.GET_CAFE_REVIEW_LIST, criteria],
    requestAccommodationList,
    options
  );
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
  return await baseInstance().post(API_URL.GET_ACCOMMODATION_REVIEW(criteria.accommodationId), criteria.tags);
};

export const useReviewAccommodationMutation = () => useMutation(requestReviewAccommodation);
