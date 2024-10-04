import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css',
})
export class CreateTodoComponent {
  taskInput = '';
  newTask = output<string>();

  createTask(): void {
    if (this.taskInput === '') {
      throw new Error('There is nothing to do!');
    } else {
      this.newTask.emit(this.taskInput);
      this.taskInput = '';
    }
  }
}
