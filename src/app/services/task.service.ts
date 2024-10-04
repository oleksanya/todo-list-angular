import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  newTaskObj(newTaskContent: string): Task {
    const task = {
      id: uuidv4(),
      taskContent: newTaskContent,
      type: 'task',
      created: new Date(),
      isDone: false,
      dateToDo: null,
    };
    return task;
  }

  saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  }
}
