import { QueryFunction, useInfiniteQuery, useMutation, useQuery } from "react-query";

import { AxiosError } from "axios";
import { QUERY_NAME, API_URL } from "@/constants";

import { requestGetTest, requestUpdateTest, requestGetInfiniteTest } from "@/services/request/test";

type Data = Array<string>;

type TestQueryKey = readonly [typeof QUERY_NAME.GET_TEST, string];

export const useTestQuery = (params: string) => {
  // TODO: any 제거
  // const testQueryFunction: QueryFunction<Data> = async ({ queryKey }) => {
  const testQueryFunction: QueryFunction<any> = async ({ queryKey }) => {
    const [, params] = queryKey as TestQueryKey;

    // return await requestGetTest(params, getAccessToken());
    return await requestGetTest(params, "");
  };

  return useQuery<Data, AxiosError<{ message: string }>>([QUERY_NAME.GET_TEST, params], testQueryFunction);
};

// 인피니트 스크롤링용
export const useInfiniteTestQuery = () => {
  return useInfiniteQuery<string[] | null, AxiosError<{ message: string }>>(
    QUERY_NAME.GET_INFINITE_TEST,
    async ({ pageParam = 0 }) => {
      return await requestGetInfiniteTest(pageParam, "accessToken");
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length;
      },
      cacheTime: 0,
      refetchOnMount: "always",
    }
  );
};

export const useTestUpdateMutation = () => {
  return useMutation((params: string) => requestUpdateTest(params, ""));
};
