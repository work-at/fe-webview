import { DESIRED_ACTIVITIES, JOBS, YEAR_OF_SERVICES } from "./common.constant";

// TODO : enum 으로 만들기
export type DesiredActivity = typeof DESIRED_ACTIVITIES[number];

export type Job = typeof JOBS[number];

export type YearOfService = typeof YEAR_OF_SERVICES[number];
