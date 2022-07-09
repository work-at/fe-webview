import { KeyOf } from "type-util";

export const POSITION = {
  IT_ENGINEER: '개발',
  DESIGNER: '디자이너',
  IT_PRODUCT_MANAGER: '기획',
  MARKETING: '마케팅',
  MERCHANDISER: '소상공인',
  BUSINESS_MANAGER: '사무직',
  HUMAN_RESOURCE: "인사관리",
  SUPPLY_MANAGER: '유통/물류',
  SALES: '세일즈',
  ACCOUNTANT: '회계사',
  TRADE: '트레이더',
  FINANCE: '금융',
  OTHERS: '기타',
} as const

export const WORKING_YEAR = {
  JUNIOR: '1~4년(주니어)',
  MID_LEVEL: '5~8년(미드레벨',
  SENIOR: '9~12년(시니어)',
  OVER: '12년 이상',
} as const

export type PositionType = KeyOf<typeof POSITION>;
export type WorkingYearType = KeyOf<typeof WORKING_YEAR>;
