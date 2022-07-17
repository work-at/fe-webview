import axios, { AxiosError } from "axios";
import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./diner.dto";
import * as Action from "./diner.action";
import * as Mapper from "./diner.mapper";

import { QUERY_NAME } from "@/constants";
import { Diner } from "./diner.type";

type DinerPinsQueryKey = readonly [typeof QUERY_NAME.GET_DINER_PINS, Action.DinerPinsCriteria];

// TODO : 액세스 토큰 연동
const accessToken = "accessToken";

// TODO : 실제 API 데이터 연동
const DUMMY_DATA: Action.DinerPinsInfo = [
  {
    id: 1,
    coordinates: {
      lat: 37.5881116,
      lng: 126.9941114,
    },
    name: "음식점 1",
  },
  {
    id: 2,
    coordinates: {
      lat: 37.5882026,
      lng: 126.9942424,
    },
    name: "음식점 2",
  },
  {
    id: 3,
    coordinates: {
      lat: 37.5883036,
      lng: 126.9943434,
    },
    name: "음식점 3",
  },
];

export const requestGetDinerPins: QueryFunction<Action.DinerPinsInfo, DinerPinsQueryKey> = async ({ queryKey }) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetDinerPinsRequest, DTO.GetDinerPinsResponse>(`/Diners`, {
  //     params: Mapper.a2dMapper_DinerPinsCriteria_GetDinerPinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const Diners = Mapper.d2aMapper_GetDinerPinsResponse_DinerPinsInfo(data);
  //
  //   return Diners;
  return DUMMY_DATA;
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

const DUMMY_DINER_DATA: Diner = {
  id: 1,
  name: "음식점 상호",
  imageUrl:
    "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  region: "서울",
  tags: ["좌석이편해요", "와이파이빵빵해요"],
};

type DinerQueryKey = readonly [typeof QUERY_NAME.GET_DINER, Action.DinerCriteria];

export const requestGetDiner: QueryFunction<Action.DinerInfo, DinerQueryKey> = async ({ queryKey }) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetDinerPinsRequest, DTO.GetDinerPinsResponse>(`/Diners`, {
  //     params: Mapper.a2dMapper_DinerPinsCriteria_GetDinerPinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const Diners = Mapper.d2aMapper_GetDinerPinsResponse_DinerPinsInfo(data);
  //
  //   return Diners;
  return DUMMY_DINER_DATA;
};

export const useDinerQuery = (
  criteria: Action.DinerCriteria,
  options: UseQueryOptions<Action.DinerInfo, AxiosError<string>, Action.DinerInfo, DinerQueryKey>
) => {
  return useQuery<Action.DinerInfo, AxiosError<string>, Action.DinerInfo, DinerQueryKey>(
    [QUERY_NAME.GET_DINER, criteria],
    requestGetDiner,
    options
  );
};

type DinerDetailQueryKey = readonly [typeof QUERY_NAME.GET_CAFE_DETAIL, Action.DinerDetailCriteria];

const DUMMY_DINER_DETAIL: Action.DinerDetailInfo = {
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

export const requestGetDinerDetail: QueryFunction<Action.DinerDetailInfo, DinerDetailQueryKey> = async ({
  queryKey,
}) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetDinerPinsRequest, DTO.GetDinerPinsResponse>(`/cafes`, {
  //     params: Mapper.a2dMapper_DinerPinsCriteria_GetDinerPinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const cafes = Mapper.d2aMapper_GetDinerPinsResponse_DinerPinsInfo(data);
  //
  //   return cafes;
  return DUMMY_DINER_DETAIL;
};

export const useDinerDetailQuery = (
  criteria: Action.DinerDetailCriteria,
  options: UseQueryOptions<Action.DinerDetailInfo, AxiosError<string>, Action.DinerDetailInfo, DinerDetailQueryKey>
) => {
  return useQuery<Action.DinerDetailInfo, AxiosError<string>, Action.DinerDetailInfo, DinerDetailQueryKey>(
    [QUERY_NAME.GET_CAFE_DETAIL, criteria],
    requestGetDinerDetail,
    options
  );
};
