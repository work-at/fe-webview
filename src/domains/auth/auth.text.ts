import { KeyOf, ValueOf } from "type-util";

export const POSITION = {
  IT_ENGINEER: '개발',
  DESIGNER: '디자이너',
  IT_PRODUCT_MANAGER: '기획',
  MARKETING: '마케팅',
  OFFICE_WORKER: '사무직',
  PROFESSIONAL: "전문직",
  FREELANCER: '프리랜서',
} as const

export const WORKING_YEAR = {
  JUNIOR: '1~4년(주니어)',
  MID_LEVEL: '5~8년(미드레벨',
  SENIOR: '9~12년(시니어)',
  OVER: '12년 이상',
} as const

export type PositionType = KeyOf<typeof POSITION>;
export type PositionValueType = ValueOf<typeof POSITION>;
export type WorkingYearType = KeyOf<typeof WORKING_YEAR>;
export type WorkingYearValueType = ValueOf<typeof WORKING_YEAR>;
