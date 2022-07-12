export type Coordinates = {
  lat: number;
  lng: number;
};

export type PinItem = {
  id: number;
  name: string;
  coordinates: Coordinates;
};
