import * as DTO from "./worker.dto";
import * as Action from "./worker.action";
import { MAP } from "@/constants/map";

export const d2aMapper_GetWorkerPinsResponse_WorkerPinsInfo = (
  response: DTO.GetWorkerPinsResponse
): Action.WorkerPinsInfo => {
  return response.data.response.map((pin) => ({
    id: pin.id,
    coordinates: {
      lat: pin.latitude,
      lng: pin.longitude,
    },
  }));
};

export const a2dMapper_WorkerPinsCriteria_GetWorkerPinsRequest = (): DTO.GetWorkerPinsRequest => {
  return {
    kilometer: MAP.SearchRadius / 1000,
  };
};

export const d2aMapper_GetWorkerDetailResponse_WorkerDetailInfo = (
  response: DTO.GetWorkerDetailResponse
): Action.WorkerDetailInfo => {
  return {
    imageUrl: response.data.imageUrl,
    job: response.data.position.content,
    name: response.data.nickname,
    story: response.data.story,
    yearOfService: response.data.workingYear.content,
    desiredActivities: [],
  };
};

export const a2dMapper_WorkersCriteria_GetWorkersRequest = (): DTO.GetWorkersRequest => {
  return {
    kilometer: MAP.SearchRadius / 1000,
  };
};

export const d2aMapper_GetWorkersResponse_WorkersInfo = (response: DTO.GetWorkersResponse): Action.WorkersInfo => {
  return response.data.response.map((worker) => ({
    id: worker.id,
    imageUrl: worker.imageUrl,
    job: worker.position.content,
    name: worker.nickname,
    yearOfService: worker.workingYear.content,
    tags: [],
  }));
};
