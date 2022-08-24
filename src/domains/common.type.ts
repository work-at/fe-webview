import { DESIRED_ACTIVITIES, JOBS, YEAR_OF_SERVICES } from "./common.constant";

// TODO : enum 으로 만들기
export type DesiredActivity = typeof DESIRED_ACTIVITIES[number]["name"];

export type Job = typeof JOBS[number]["name"];

export type YearOfService = typeof YEAR_OF_SERVICES[number]["name"];
