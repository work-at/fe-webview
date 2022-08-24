import { AxiosError } from "axios";
import { QueryFunction, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./worker.dto";
import * as Action from "./worker.action";
import * as Mapper from "./worker.mapper";

import { QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";
import { MAP } from "@/constants/map";

type WorkerPinsQueryKey = readonly [typeof QUERY_NAME.GET_WORKER_PINS];

const DUMMY_WORKER_PINS: Action.WorkerPinsInfo = [
  {
    id: 1,
    coordinates: {
      lat: 37.582097993196896,
      lng: 126.99972828714587,
    },
  },
  {
    id: 2,
    coordinates: {
      lat: 37.58297993196896,
      lng: 126.99872828714587,
    },
  },
];

export const requestGetWorkerPins: QueryFunction<Action.WorkerPinsInfo, WorkerPinsQueryKey> = async () => {
  const data = await baseInstance().get<void, DTO.GetWorkerPinsResponse>("map/workers/pins", {
    params: {
      kilometer: MAP.SearchRadius / 1000,
    } as DTO.GetWorkerPinsRequest,
  });

  const workerPins = Mapper.d2aMapper_GetWorkerPinsResponse_WorkerPinsInfo(data);

  return DUMMY_WORKER_PINS;
};

export const useWorkerPinsQuery = (
  options: UseQueryOptions<Action.WorkerPinsInfo, AxiosError<string>, Action.WorkerPinsInfo, WorkerPinsQueryKey>
) => {
  return useQuery<Action.WorkerPinsInfo, AxiosError<string>, Action.WorkerPinsInfo, WorkerPinsQueryKey>(
    [QUERY_NAME.GET_WORKER_PINS],
    requestGetWorkerPins,
    options
  );
};

type WorkerDetailQueryKey = readonly [typeof QUERY_NAME.GET_WORKER_DETAIL, Action.WorkerDetailCriteria];

export const requestGetWorkerDetail: QueryFunction<Action.WorkerDetailInfo, WorkerDetailQueryKey> = async ({
  queryKey,
}) => {
  const [, criteria] = queryKey;

  const data = await baseInstance().get<void, DTO.GetWorkerDetailResponse>(`map/workers/${criteria.id}`);

  const workerDetail = Mapper.d2aMapper_GetWorkerDetailResponse_WorkerDetailInfo(data);

  return workerDetail;
};

export const useWorkerDetailQuery = (
  criteria: Action.WorkerDetailCriteria,
  options: UseQueryOptions<Action.WorkerDetailInfo, AxiosError<string>, Action.WorkerDetailInfo, WorkerDetailQueryKey>
) => {
  return useQuery<Action.WorkerDetailInfo, AxiosError<string>, Action.WorkerDetailInfo, WorkerDetailQueryKey>(
    [QUERY_NAME.GET_WORKER_DETAIL, criteria],
    requestGetWorkerDetail,
    options
  );
};

type WorkersQueryKey = readonly [typeof QUERY_NAME.GET_WORKERS];

const DUMMY_WORKER: Action.WorkersInfo = [
  {
    id: 1,
    job: "",
    name: "",
    tags: [],
    yearOfService: "1년차",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export const requestGetWorkers: QueryFunction<Action.WorkersInfo, WorkersQueryKey> = async () => {
  const data = await baseInstance().get<DTO.GetWorkersRequest, DTO.GetWorkersResponse>("/map/workers", {
    params: Mapper.a2dMapper_WorkersCriteria_GetWorkersRequest(),
  });

  const workers = Mapper.d2aMapper_GetWorkersResponse_WorkersInfo(data);

  return DUMMY_WORKER;
};

// TODO : Suspense 가 true 인 경우 무조건 true 가 나오도록 설정하기. isLoading 제거하ㄱ
export const useWorkersQuery = (
  options: UseQueryOptions<Action.WorkersInfo, AxiosError<string>, Action.WorkersInfo, WorkersQueryKey>
) => {
  return useQuery<Action.WorkersInfo, AxiosError<string>, Action.WorkersInfo, WorkersQueryKey>(
    [QUERY_NAME.GET_WORKERS],
    requestGetWorkers,
    options
  );
};
