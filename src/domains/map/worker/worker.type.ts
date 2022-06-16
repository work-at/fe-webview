type Job = 'frontend-developer' | 'frontend-developer' | 'designer' | 'project-manager';

export type Worker = {
  id: string;
  job: Job;
  name: string;
  imageUrl?: string;
  careerYear: number;
  availableTime: [Date, Date];
  coordinates: {
    x: number;
    y: number;
  };
};