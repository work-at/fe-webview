import axios, { AxiosError } from "axios";
import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./worker.dto";
import * as Action from "./worker.action";
import * as Mapper from "./worker.mapper";

import { QUERY_NAME } from "@/constants";
import { Worker } from "./worker.type";

type WorkerPinsQueryKey = readonly [typeof QUERY_NAME.GET_WORKER_PINS, Action.WorkerPinsCriteria];

// TODO : 액세스 토큰 연동
const accessToken = "accessToken";

// TODO : 실제 API 데이터 연동
const DUMMY_DATA: Action.WorkerPinsInfo = [
  {
    id: 1,
    coordinates: {
      lat: 37.5881116,
      lng: 126.9941114,
    },
    name: "워케이셔너 1",
  },
  {
    id: 2,
    coordinates: {
      lat: 37.5882026,
      lng: 126.9942424,
    },
    name: "워케이셔너 2",
  },
  {
    id: 3,
    coordinates: {
      lat: 37.5883036,
      lng: 126.9943434,
    },
    name: "워케이셔너 3",
  },
];

export const requestGetWorkerPins: QueryFunction<Action.WorkerPinsInfo, WorkerPinsQueryKey> = async ({ queryKey }) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetWorkerPinsRequest, DTO.GetWorkerPinsResponse>(`/Workers`, {
  //     params: Mapper.a2dMapper_WorkerPinsCriteria_GetWorkerPinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const Workers = Mapper.d2aMapper_GetWorkerPinsResponse_WorkerPinsInfo(data);
  //
  //   return Workers;
  return DUMMY_DATA;
};

export const useWorkerPinsQuery = (
  criteria: Action.WorkerPinsCriteria,
  options: UseQueryOptions<Action.WorkerPinsInfo, AxiosError<string>, Action.WorkerPinsInfo, WorkerPinsQueryKey>
) => {
  return useQuery<Action.WorkerPinsInfo, AxiosError<string>, Action.WorkerPinsInfo, WorkerPinsQueryKey>(
    [QUERY_NAME.GET_WORKER_PINS, criteria],
    requestGetWorkerPins,
    options
  );
};

const DUMMY_WORKER_DATA: Worker = {
  id: 1,
  name: "홍길동",
  imageUrl:
    "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  job: "개발",
  yearOfService: 4,
  tags: ["개발같이해요", "직무토크하실분", "퇴근후함께놀아요"],
};

type WorkerQueryKey = readonly [typeof QUERY_NAME.GET_WORKER, Action.WorkerCriteria];

export const requestGetWorker: QueryFunction<Action.WorkerInfo, WorkerQueryKey> = async ({ queryKey }) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetWorkerPinsRequest, DTO.GetWorkerPinsResponse>(`/Workers`, {
  //     params: Mapper.a2dMapper_WorkerPinsCriteria_GetWorkerPinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const Workers = Mapper.d2aMapper_GetWorkerPinsResponse_WorkerPinsInfo(data);
  //
  //   return Workers;
  return DUMMY_WORKER_DATA;
};

export const useWorkerQuery = (
  criteria: Action.WorkerCriteria,
  options: UseQueryOptions<Action.WorkerInfo, AxiosError<string>, Action.WorkerInfo, WorkerQueryKey>
) => {
  return useQuery<Action.WorkerInfo, AxiosError<string>, Action.WorkerInfo, WorkerQueryKey>(
    [QUERY_NAME.GET_WORKER, criteria],
    requestGetWorker,
    options
  );
};

type WorkerDetailQueryKey = readonly [typeof QUERY_NAME.GET_CAFE_DETAIL, Action.WorkerDetailCriteria];

const DUMMY_WORKER_DETAIL: Action.WorkerDetailInfo = {
  imageUrl:
    "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  name: "이름",
  job: "개발",
  desiredActivities: [
    {
      icon: "WalkChatReview1",
      text: "리뷰 1",
    },
    {
      icon: "WalkChatReview2",
      text: "리뷰 2",
    },
    {
      icon: "WalkChatReview3",
      text: "리뷰 3",
    },
    {
      icon: "WalkChatReview3",
      text: "리뷰 3",
    },
  ],
  story:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit, explicabo corporis velit nostrum dicta voluptas omnis tenetur corrupti commodi repudiandae id ullam atque cum cumque voluptates nihil eos tempore?",
  yearOfService: 3,
};

export const requestGetWorkerDetail: QueryFunction<Action.WorkerDetailInfo, WorkerDetailQueryKey> = async ({
  queryKey,
}) => {
  //   const [, criteria] = queryKey;

  //   if (!accessToken) {
  //     throw new Error("허가되지 되지 않은 접근입니다.");
  //   }

  //   const data = await axios.get<DTO.GetWorkerPinsRequest, DTO.GetWorkerPinsResponse>(`/cafes`, {
  //     params: Mapper.a2dMapper_WorkerPinsCriteria_GetWorkerPinsRequest(criteria),
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   const cafes = Mapper.d2aMapper_GetWorkerPinsResponse_WorkerPinsInfo(data);
  //
  //   return cafes;
  return DUMMY_WORKER_DETAIL;
};

export const useWorkerDetailQuery = (
  criteria: Action.WorkerDetailCriteria,
  options: UseQueryOptions<Action.WorkerDetailInfo, AxiosError<string>, Action.WorkerDetailInfo, WorkerDetailQueryKey>
) => {
  return useQuery<Action.WorkerDetailInfo, AxiosError<string>, Action.WorkerDetailInfo, WorkerDetailQueryKey>(
    [QUERY_NAME.GET_CAFE_DETAIL, criteria],
    requestGetWorkerDetail,
    options
  );
};

type WorkersQueryKey = readonly [typeof QUERY_NAME.GET_CAFES, Action.WorkersCriteria];

const DUMMY_WORKERS: Action.WorkersInfo = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "이름",
    job: "개발",
    tags: ["식사메뉴가있어요", "좌석이편해요", "와이파이빵빵해요"],
    yearOfService: 3,
  },
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "이름",
    job: "개발",
    tags: ["식사메뉴가있어요", "좌석이편해요", "와이파이빵빵해요"],
    yearOfService: 3,
  },

  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "이름",
    job: "개발",
    tags: ["식사메뉴가있어요", "좌석이편해요", "와이파이빵빵해요"],
    yearOfService: 3,
  },
];

export const requestGetWorkers: QueryFunction<Action.WorkersInfo, WorkersQueryKey> = async ({ queryKey }) => {
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
  return DUMMY_WORKERS;
};

// TODO : Suspense 가 true 인 경우 무조건 true 가 나오도록 설정하기. isLoading 제거하ㄱ
export const useWorkersQuery = (
  criteria: Action.WorkersCriteria,
  options: UseQueryOptions<Action.WorkersInfo, AxiosError<string>, Action.WorkersInfo, WorkersQueryKey>
) => {
  return useQuery<Action.WorkersInfo, AxiosError<string>, Action.WorkersInfo, WorkersQueryKey>(
    [QUERY_NAME.GET_CAFES, criteria],
    requestGetWorkers,
    options
  );
};
