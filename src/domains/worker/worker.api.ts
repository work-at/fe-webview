import { AxiosError } from "axios";
import { QueryFunction, useQuery, UseQueryOptions } from "react-query";

import * as DTO from "./worker.dto";
import * as Action from "./worker.action";
import * as Mapper from "./worker.mapper";

import { QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";
import { MAP } from "@/constants/map";

type WorkerPinsQueryKey = readonly [typeof QUERY_NAME.GET_WORKER_PINS];

export const requestGetWorkerPins: QueryFunction<Action.WorkerPinsInfo, WorkerPinsQueryKey> = async () => {
  const data = await baseInstance().get<void, DTO.GetWorkerPinsResponse>("map/workers/pins", {
    params: {
      kilometer: MAP.SearchRadius / 1000,
    } as DTO.GetWorkerPinsRequest,
  });

  const workerPins = Mapper.d2aMapper_GetWorkerPinsResponse_WorkerPinsInfo(data);

  return workerPins;
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

export const requestGetWorkers: QueryFunction<Action.WorkersInfo, WorkersQueryKey> = async () => {
  const data = await baseInstance().get<DTO.GetWorkersRequest, DTO.GetWorkersResponse>("/map/workers", {
    params: Mapper.a2dMapper_WorkersCriteria_GetWorkersRequest(),
  });

  const workers = Mapper.d2aMapper_GetWorkersResponse_WorkersInfo(data);

  return workers;
};

export const useWorkersQuery = (
  options: UseQueryOptions<Action.WorkersInfo, AxiosError<string>, Action.WorkersInfo, WorkersQueryKey>
) => {
  return useQuery<Action.WorkersInfo, AxiosError<string>, Action.WorkersInfo, WorkersQueryKey>(
    [QUERY_NAME.GET_WORKERS],
    requestGetWorkers,
    options
  );
};
