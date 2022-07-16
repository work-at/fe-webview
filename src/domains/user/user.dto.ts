export type GetAddressAndNearWorkerCountRequest = {
  kilometer: number;
  latitude: string;
  longitude: string;
};

export type GetAddressAndNearWorkerCountResponse = {
  address: string;
  count: number;
};
