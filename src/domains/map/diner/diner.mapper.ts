import * as DTO from "./diner.dto";
import * as Action from "./diner.action";

export const d2aMapper_GetDinersResponse_DinersInfo = (
  response: DTO.GetDinersResponse
): Action.DinersInfo => {
  return response.map((cafe) => ({
  })) as any;
};

export const a2dMapper_DinersCriteria_GetDinersRequest = (
  criteria: Action.DinersCriteria
): DTO.GetDinersRequest => {
  return {
  } as any;
};
