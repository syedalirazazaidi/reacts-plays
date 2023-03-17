export interface TTask {
  name: string;
  completed: boolean;
  _id?: string;
}
export interface TaskType {
  tasks: TTask[];
}
export interface newTaskType {
  task: TTask[];
}
