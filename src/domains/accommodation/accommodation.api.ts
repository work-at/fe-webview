import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";
import { QueryFunction, useMutation, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./accommodation.dto";
import { AxiosError } from "axios";
import { AccommodationReviewCommand } from "./accommodation.action";
import AccommImg from "@/assets/images/@dummy/@accomm-list.png";

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
  return await baseInstance().post(API_URL.GET_ACCOMMODATION_REVIEW(criteria.accommodationId), {
    tagNames: criteria.tags,
  });
};

export const useReviewAccommodationMutation = () => useMutation(requestReviewAccommodation);

export const requestRegionTraffic: QueryFunction<DTO.RegionTrafficResponse> = async () => {
  return await baseInstance().get<unknown, DTO.RegionTrafficResponse>(API_URL.GET_REGION_TRAFFIC);
};

export const useRegionTrafficQuery = () => {
  return useQuery<DTO.RegionTrafficResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_REGION_TRAFFIC],
    requestRegionTraffic
  );
};

export const requestAccommodationCuration: QueryFunction<DTO.AccommodationCurationResponse> | any = async () => {
  // TODO: API 완성되면 제거
  return {
    data: {
      accommodations: [
        {
          id: 1,
          imgUrl: AccommImg,
          region: "SEOUL",
          name: "질그랭이센터 두줄 테스트 숙소 이름 두줄 테스트입니다 두줄 테스트",
        },
        {
          id: 1,
          imgUrl: AccommImg,
          region: "JEJU",
          name: "질그랭이센터",
        },
        {
          id: 1,
          imgUrl: AccommImg,
          region: "GANGWON",
          name: "질그랭이센터",
        },
      ],
    },
  };
  return await baseInstance().get<unknown, DTO.AccommodationCurationResponse>(API_URL.GET_ACCOMMODATION_CURATION);
};

export const useAccommodationCurationQuery = () => {
  return useQuery<DTO.AccommodationCurationResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_ACCOMMODATION_CURATION],
    requestAccommodationCuration
  );
};
