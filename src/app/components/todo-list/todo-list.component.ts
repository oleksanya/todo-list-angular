import {
  Component,
  input,
  OnChanges,
  OnInit,
  output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { Task } from '../../interfaces/task';
import { updateTaskStatus } from '../../interfaces/updateTaskStatus.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks = input<Task[]>();
  taskStatus = output<updateTaskStatus>();
  taskToDelete = output<string>();

  handleTaskStatus(taskStatus: updateTaskStatus) {
    console.log(taskStatus);

    this.taskStatus.emit(taskStatus);
  }

  handleTaskToDelete(tastId: string) {
    this.taskToDelete.emit(tastId);
  }
}
