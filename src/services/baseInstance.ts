import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ACCESS_TOKEN } from "@/constants";

export const LOG_TOGGLE = false;

const defaultOption = {
  baseURL: process.env.SERVER_URL,
  headers: { "Content-Type": "application/json" },
};

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  LOG_TOGGLE && console.info(`[request] [${JSON.stringify(config)}]`);

  const token = sessionStorage.getItem(ACCESS_TOKEN) ?? null;

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  LOG_TOGGLE && console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  LOG_TOGGLE && console.info(`[response] [${JSON.stringify(response)}]`);

  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  LOG_TOGGLE && console.error(`[response error] [${JSON.stringify(error)}]`);

  return Promise.reject(error);
};

export const baseInstance = () => {
  const axiosInstance = axios.create(defaultOption);

  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  axiosInstance.defaults.paramsSerializer = (paramObj) => {
    const params = new URLSearchParams();
    for (const key in paramObj) {
      params.append(key, paramObj[key]);
    }

    return params.toString();
  };

  return axiosInstance;
};
