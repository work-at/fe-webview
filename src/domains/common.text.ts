import { DesiredActivity, Job, YearOfService } from "./common.type";

export const Job_TEXT: Readonly<Record<Job, string>> = {
  "office-worker": "사무직",
  Marketing: "마케팅",
  PM: "기획/PM",
  designer: "디자인",
  development: "개발",
  freelancer: "프리랜서",
  profession: "전문직",
};

export const YearOfService_TEXT: Readonly<Record<YearOfService, string>> = {
  "11+": "11년차 이상",
  "1~2": "1~2년차",
  "3~4": "3~4년차",
  "5~6": "5~6년차",
  "7~8": "7~8년차",
  "9~10": "9~10년차",
};

export const DesiredActivity_Text: Readonly<Record<DesiredActivity, string>> = {
  "career-concern": "직무고민",
  "diner-mate": "식사메이트구해요",
  "hang-around-after": "퇴근후함께놀아요",
  "job-talk": "직무토크하실분",
  "junior-gather": "주니어모여라",
  "senior-gather": "시니어모여라",
  "work-together": "같이 일해요",
  passionate: "열정맨",
};
