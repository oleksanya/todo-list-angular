export interface Task {
  id: string;
  taskContent: string;
  type: string;
  created: Date;
  isDone: boolean;
  dateToDo: Date | null;
}
