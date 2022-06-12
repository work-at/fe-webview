import axios from "axios";
import { API_URL, LIMIT } from "@/constants";

type Data = {
  prop1: string;
};

export const requestGetTest = async (repositoryName: string, accessToken: string | null) => {
  if (!accessToken) {
    throw new Error("");
  }

  const response = await axios.get<Data>(API_URL.GET_TEST(repositoryName), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

// 인피니트 스크롤링용
export const requestGetInfiniteTest = async (page: number, accessToken: string) => {
  const response = await axios.get<string[]>(API_URL.GET_INFINITE_TEST(page, LIMIT.TEST_COUNT_PER_FETCH), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const requestUpdateTest = async (params: string, accessToken: string | null) => {
  if (!accessToken) {
    throw new Error("");
  }

  const response = await axios.put<string>(API_URL.UPDATE_TEST(params), null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
