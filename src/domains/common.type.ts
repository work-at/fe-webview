import { DESIRED_ACTIVITIES, JOBS, REPORTS, YEAR_OF_SERVICES } from "./common.constant";

// TODO : enum 으로 만들기
export type DesiredActivity = typeof DESIRED_ACTIVITIES[number]["name"];

export type Job = typeof JOBS[number]["name"];

export type YearOfService = typeof YEAR_OF_SERVICES[number]["name"];

export type Report = typeof REPORTS[number];
