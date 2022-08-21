import { KeyOf, ValueOf } from "type-util";

export const POSITION = {
  ENGINEER: "개발",
  DESIGNER: "디자이너",
  PRODUCT: "기획 / PM",
  MARKETING: "마케팅",
  OFFICE: "사무직",
  EXPERT: "전문직",
  FREE: "프리랜서",
} as const;

export const WORKING_YEAR = {
  NEW_STAFF: "1~2년차",
  JUNIOR: "3~4년차",
  MID_LEVEL: "5~6년차",
  SENIOR: "7~8년차",
  EXPERT: "9~10년차",
  OVER: "11년차~",
} as const;

export type PositionType = KeyOf<typeof POSITION>;
export type PositionValueType = ValueOf<typeof POSITION>;
export type WorkingYearType = KeyOf<typeof WORKING_YEAR>;
export type WorkingYearValueType = ValueOf<typeof WORKING_YEAR>;
