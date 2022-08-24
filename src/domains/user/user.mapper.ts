import * as DTO from "./user.dto";
import * as Action from "./user.action";

export const a2dMapper_UserAddressPinsCriteria_PostUserAddressRequest = (
  criteria: Action.UserAddressCriteria
): DTO.PostUserAddressRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
  };
};

export const d2aMapper_GetNearWorkersCountingResponse_NearWorkersCountInfo = (
  response: DTO.GetNearWorkersCountingResponse
): Action.NearWorkersCountInfo => {
  return {
    count: response.count,
  };
};

export const a2dMapper_SyncUserLocationCommand_PostSync = (
  command: Action.SyncUserLocationCommand
): DTO.PostSyncRequest => {
  return {
    latitude: command.lat,
    longitude: command.lng,
  };
};

export const a2dMapper_UpdateUserInfoCommand_PutUserProfileRequest = (
  command: Action.UpdateUserInfoCommand
): DTO.PutUserProfileRequest => {
  // TODO : enum 알아내서 Mapping 완성하기
  return {
    activities: command.desiredActivities,
    nickname: command.nickName,
    position: command.job,
    story: command.story,
    workingYear: command.yearOfService,
  };
};
