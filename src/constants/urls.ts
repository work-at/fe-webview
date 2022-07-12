export const API_URL = {
  PATH: (params: string) => `http://34.64.168.189:8080/api/v1/${params}`,
  GET_TEST: (params: string) => `/${params}`,
  GET_INFINITE_TEST: (page: number, count: number) => `/something?page=${page}&count=${count}`,
  UPDATE_TEST: (params: string) => `/${params}`,
};
