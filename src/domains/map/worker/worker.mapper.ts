import * as DTO from "./worker.dto";
import * as Action from "./worker.action";

export const d2aMapper_GetWorkersResponse_WorkersInfo = (
  response: DTO.GetWorkersResponse
): Action.WorkersInfo => {
  return response.map((Worker) => ({
  })) as any;
};

export const a2dMapper_WorkersCriteria_GetWorkersRequest = (
  criteria: Action.WorkersCriteria
): DTO.GetWorkersRequest => {
  return {
  } as any;
};
