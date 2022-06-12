export const PAGE_URL = {};

export const API_URL = {
  GET_TEST: (params: string) => `/${params}`,
  GET_INFINITE_TEST: (page: number, count: number) => `/something?page=${page}&count=${count}`,
  UPDATE_TEST: (params: string) => `/${params}`,
};
