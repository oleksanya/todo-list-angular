import {
  Component,
  input,
  output,
} from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { Task } from '../../interfaces/task';
import { updateTaskStatus } from '../../interfaces/updateTaskStatus.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks = input<Task[]>();
  taskStatus = output<updateTaskStatus>();
  taskToDelete = output<string>();

  currentDate: number = Date.now();

  handleTaskStatus(taskStatus: updateTaskStatus) {
    console.log(taskStatus);

    this.taskStatus.emit(taskStatus);
  }

  handleTaskToDelete(taskId: string) {
    this.taskToDelete.emit(taskId);
  }
}
