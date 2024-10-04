import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task';
import { CommonModule } from '@angular/common';
import { updateTaskStatus } from '../../interfaces/updateTaskStatus.interface';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent implements OnInit {
  task = input<Task>();
  isDoneStatus = output<updateTaskStatus>();
  taskToDelete = output<string>();

  checked = false;

  ngOnInit(): void {
    this.checked = this.task()?.isDone || false;
  }

  isDone() {
    this.checked = !this.checked;
    this.updateTaskStatus();
  }

  updateTaskStatus() {
    const taskId = this.task()?.id || '';

    const taskInfo: updateTaskStatus = {
      id: taskId,
      isDone: this.checked,
    };
    this.isDoneStatus.emit(taskInfo);
  }

  deleteTask() {
    const taskId = this.task()?.id || '';
    this.taskToDelete.emit(taskId);
  }
}
