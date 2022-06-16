import axios, { AxiosError } from "axios";
import { QueryFunction, useQuery } from "react-query";

import * as DTO from "./worker.dto";
import * as Action from "./worker.action";
import * as Mapper from "./worker.mapper";

import { QUERY_NAME } from "@/constants";

type TestQueryKey = readonly [typeof QUERY_NAME.GET_TEST, Action.WorkersCriteria];

const accessToken = 'accessToken';

// 가까운 카페 핀 리스트 정보 요청
export const requestGetWorkers: QueryFunction<Action.WorkersInfo> = async ({ queryKey }) => {
  const [, criteria] = queryKey as TestQueryKey;

  if (!accessToken) {
    throw new Error("");
  }

  const data = await axios.get<DTO.GetWorkersRequest, DTO.GetWorkersResponse>(`/Workers}`, {
    params: Mapper.a2dMapper_WorkersCriteria_GetWorkersRequest(criteria),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const Workers = Mapper.d2aMapper_GetWorkersResponse_WorkersInfo(data);

  return Workers;
};

export const useWorkersQuery = (criteria: Action.WorkersCriteria) => {
  return useQuery<Action.WorkersInfo, AxiosError<{ message: string }>>([QUERY_NAME.GET_TEST, criteria], requestGetWorkers);
};
