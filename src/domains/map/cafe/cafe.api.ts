import axios, { AxiosError } from "axios";
import { QueryFunction, useQuery } from "react-query";

import * as DTO from "./cafe.dto";
import * as Action from "./cafe.action";
import * as Mapper from "./cafe.mapper";

import { QUERY_NAME } from "@/constants";

type TestQueryKey = readonly [typeof QUERY_NAME.GET_TEST, Action.CafesCriteria];

const accessToken = 'accessToken';

// 가까운 카페 핀 리스트 정보 요청
export const requestGetCafes: QueryFunction<Action.CafesInfo> = async ({ queryKey }) => {
  const [, criteria] = queryKey as TestQueryKey;

  if (!accessToken) {
    throw new Error("");
  }

  const data = await axios.get<DTO.GetCafesRequest, DTO.GetCafesResponse>(`/cafes}`, {
    params: Mapper.a2dMapper_CafesCriteria_GetCafesRequest(criteria),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const cafes = Mapper.d2aMapper_GetCafesResponse_CafesInfo(data);

  return cafes;
};

export const useCafesQuery = (criteria: Action.CafesCriteria) => {
  return useQuery<Action.CafesInfo, AxiosError<{ message: string }>>([QUERY_NAME.GET_TEST, criteria], requestGetCafes);
};
