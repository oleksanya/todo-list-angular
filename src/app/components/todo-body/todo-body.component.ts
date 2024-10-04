import { Component, inject, OnInit } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';
import { updateTaskStatus } from '../../interfaces/updateTaskStatus.interface';

@Component({
  selector: 'app-todo-body',
  standalone: true,
  imports: [TodoListComponent, CreateTodoComponent],
  templateUrl: './todo-body.component.html',
  styleUrl: './todo-body.component.css',
})
export class TodoBodyComponent implements OnInit {
  private taskService = inject(TaskService);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = this.loadTasks();
  }

  addTaskContent(newTask: string): void {
    const taskObj = this.createTaskObj(newTask);

    this.tasks.push(taskObj);
    this.saveToLocalStorage(this.tasks);
  }

  saveToLocalStorage(tasks: Task[]): void {
    this.taskService.saveTasksToLocalStorage(tasks);
  }

  loadTasks(): Task[] {
    return this.taskService.loadTasks();
  }

  createTaskObj(newTaskContent: string): Task {
    return this.taskService.newTaskObj(newTaskContent);
  }

  updateTaskStatus(taskStatus: updateTaskStatus) {
    this.tasks.find((taskObj) => {
      if (taskObj.id === taskStatus.id) {
        taskObj.isDone = taskStatus.isDone;
        this.saveToLocalStorage(this.tasks);
      }
    });
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((taskObj) => taskObj.id !== taskId);
    this.saveToLocalStorage(this.tasks);
  }
}
