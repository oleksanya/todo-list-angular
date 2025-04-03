import { Component } from '@angular/core';
import { TodoBodyComponent } from '../../components/todo-body/todo-body.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoBodyComponent, HeaderComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
})
export class TodoPageComponent {}
