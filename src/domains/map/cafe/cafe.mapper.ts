import * as DTO from "./cafe.dto";
import * as Action from "./cafe.action";

export const d2aMapper_GetCafesResponse_CafesInfo = (
  response: DTO.GetCafesResponse
): Action.CafesInfo => {
  return response.map((cafe) => ({
  })) as any;
};

export const a2dMapper_CafesCriteria_GetCafesRequest = (
  criteria: Action.CafesCriteria
): DTO.GetCafesRequest => {
  return {
  } as any;
};
