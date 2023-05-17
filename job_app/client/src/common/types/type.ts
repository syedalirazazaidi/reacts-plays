export type ISHow = boolean;
export interface AddJobType {
  position: string;
  company: string;
  location: string;
  status: string;
  job_type: string;
}
export interface SearchType {
  search: string;
  sort: string;
  status: string;
  job_type: string;
}
export interface Job {
  _id: string;
  company: string;
  createdAt: string;
  job_type: string;
  location: string;
  position: string;
  status: string;
  updatedAt: string;
}
export interface JobType {
  job: Job[];
}
