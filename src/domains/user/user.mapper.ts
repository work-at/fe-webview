import * as DTO from "./user.dto";
import * as Action from "./user.action";

export const d2aMapper_GetAddressAndNearWorkerCountResponse_UserAddressInfo = (
  response: DTO.GetAddressAndNearWorkerCountResponse
): Action.UserAddressInfo => {
  return {
    address: response.address,
    nearUserAddressCount: response.count,
  };
};

const KILOMETER = 10;

export const a2dMapper_UserAddressPinsCriteria_GetAddressAndNearWorkerCountRequest = (
  criteria: Action.UserAddressCriteria
): DTO.GetAddressAndNearWorkerCountRequest => {
  return {
    kilometer: KILOMETER,
    latitude: String(criteria.lat),
    longitude: String(criteria.lng),
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
