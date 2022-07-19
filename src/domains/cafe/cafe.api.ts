import axios, { AxiosError } from "axios";
import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./cafe.dto";
import * as Action from "./cafe.action";
import * as Mapper from "./cafe.mapper";

import { QUERY_NAME } from "@/constants";
import { Cafe } from "./cafe.type";

type CafePinsQueryKey = readonly [typeof QUERY_NAME.GET_CAFE_PINS, Action.CafePinsCriteria];

// TODO : 액세스 토큰 연동
const accessToken = "accessToken";

// TODO : 실제 API 데이터 연동
const DUMMY_DATA: Action.CafePinsInfo = [
  {
    id: 1,
    coordinates: {
      lat: 37.5881116,
      lng: 126.9941114,
    },
    name: "카페 1",
  },
  {
    id: 2,
    coordinates: {
      lat: 37.5882026,
      lng: 126.9942424,
    },
    name: "카페 2",
  },
  {
    id: 3,
    coordinates: {
      lat: 37.5883036,
      lng: 126.9943434,
    },
    name: "카페 3",
  },
];

export const requestGetCafePins: QueryFunction<Action.CafePinsInfo, CafePinsQueryKey> = async ({ queryKey }) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetCafePinsRequest, DTO.GetCafePinsResponse>(`/cafes`, {
  //     params: Mapper.a2dMapper_CafePinsCriteria_GetCafePinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const cafes = Mapper.d2aMapper_GetCafePinsResponse_CafePinsInfo(data);
  //
  //   return cafes;
  return DUMMY_DATA;
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

const DUMMY_CAFE: Cafe = {
  id: 1,
  imageUrl:
    "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  name: "포메인제주",
  region: "제주",
  tags: ["식사메뉴가있어요", "좌석이편해요", "와이파이빵빵해요"],
};

type CafeQueryKey = readonly [typeof QUERY_NAME.GET_CAFE, Action.CafeCriteria];

export const requestGetCafe: QueryFunction<Action.CafeInfo, CafeQueryKey> = async ({ queryKey }) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetCafePinsRequest, DTO.GetCafePinsResponse>(`/cafes`, {
  //     params: Mapper.a2dMapper_CafePinsCriteria_GetCafePinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const cafes = Mapper.d2aMapper_GetCafePinsResponse_CafePinsInfo(data);
  //
  //   return cafes;
  return DUMMY_CAFE;
};

export const useCafeQuery = (
  criteria: Action.CafeCriteria,
  options: UseQueryOptions<Action.CafeInfo, AxiosError<string>, Action.CafeInfo, CafeQueryKey>
) => {
  return useQuery<Action.CafeInfo, AxiosError<string>, Action.CafeInfo, CafeQueryKey>(
    [QUERY_NAME.GET_CAFE, criteria],
    requestGetCafe,
    options
  );
};

type CafeDetailQueryKey = readonly [typeof QUERY_NAME.GET_CAFE_DETAIL, Action.CafeDetailCriteria];

const DUMMY_CAFE_DETAIL: Action.CafeDetailInfo = {
  imageUrl: "imageUrl",
  name: "이름",
  address: "주소",
  kakaoLink: "https://map.kakao.com",
  phoneNumber: "010-0000-0000",
  reviewPoints: [],
  coordinates: {
    lat: 127,
    lng: 38,
  },
};

export const requestGetCafeDetail: QueryFunction<Action.CafeDetailInfo, CafeDetailQueryKey> = async ({ queryKey }) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetCafePinsRequest, DTO.GetCafePinsResponse>(`/cafes`, {
  //     params: Mapper.a2dMapper_CafePinsCriteria_GetCafePinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const cafes = Mapper.d2aMapper_GetCafePinsResponse_CafePinsInfo(data);
  //
  //   return cafes;
  return DUMMY_CAFE_DETAIL;
};

// TODO : Suspense 가 true 인 경우 무조건 true 가 나오도록 설정하기. isLoading 제거하ㄱ
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
