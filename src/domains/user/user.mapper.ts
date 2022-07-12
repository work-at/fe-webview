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
