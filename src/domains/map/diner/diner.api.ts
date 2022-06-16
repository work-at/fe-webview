import axios, { AxiosError } from "axios";
import { QueryFunction, useQuery } from "react-query";

import * as DTO from "./diner.dto";
import * as Action from "./diner.action";
import * as Mapper from "./diner.mapper";

import { QUERY_NAME } from "@/constants";

type TestQueryKey = readonly [typeof QUERY_NAME.GET_TEST, Action.DinersCriteria];

const accessToken = 'accessToken';

// 가까운 카페 핀 리스트 정보 요청
export const requestGetDiners: QueryFunction<Action.DinersInfo> = async ({ queryKey }) => {
  const [, criteria] = queryKey as TestQueryKey;

  if (!accessToken) {
    throw new Error("");
  }

  const data = await axios.get<DTO.GetDinersRequest, DTO.GetDinersResponse>(`/Diners}`, {
    params: Mapper.a2dMapper_DinersCriteria_GetDinersRequest(criteria),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const Diners = Mapper.d2aMapper_GetDinersResponse_DinersInfo(data);

  return Diners;
};

export const useDinersQuery = (criteria: Action.DinersCriteria) => {
  return useQuery<Action.DinersInfo, AxiosError<{ message: string }>>([QUERY_NAME.GET_TEST, criteria], requestGetDiners);
};
