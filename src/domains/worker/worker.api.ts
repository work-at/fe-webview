import axios, { AxiosError } from "axios";
import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./worker.dto";
import * as Action from "./worker.action";
import * as Mapper from "./worker.mapper";

import { QUERY_NAME } from "@/constants";

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
