import { AxiosError } from "axios";
import { QueryFunction, useQuery } from "react-query";
import { API_URL, QUERY_NAME } from "@/constants";

import * as DTO from "./accomodation.dto";

import { baseInstance } from "@/services";

export const requestRegionTraffic: QueryFunction<DTO.RegionTrafficResponse> = async () => {
  return await baseInstance().get<unknown, DTO.RegionTrafficResponse>(API_URL.GET_REGION_TRAFFIC);
};

export const useRegionTrafficQuery = () => {
  return useQuery<DTO.RegionTrafficResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_REGION_TRAFFIC],
    requestRegionTraffic
  );
};
