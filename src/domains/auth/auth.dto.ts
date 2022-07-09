import { PositionType, WorkingYearType } from "./auth.text";

export type LoginRequest = {
  code: string;
}

type CodeType = 'WORK01' | 'WORK02';

export type LoginResponse = {
  accessToken: string;
  code: CodeType;
  oauthId: number;
}

export type SignUpRequest = {
  nickname: string,
  oauthId: number,
  oauthType: "KAKAO",
  position: PositionType,
  workingYear: WorkingYearType
}

export type SignUpResponse = {
  accessToken: string;
}

export type ValidateNicknameRequest = {
  nickname: string;
}

export type ValidateNicknameResponse = { data: boolean };