export type RegionTrafficResponse = {
  data: {
    region: "JEJU" | "SEOUL" | "GANGNEUNG" | "SOKCHO";
    type: "POPULAR" | "IN_BETWEEN" | "FREE";
    message: "완전핫함" | "핫플직전" | "한산해요";
  };
};
