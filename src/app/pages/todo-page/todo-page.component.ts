import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TodoBodyComponent } from '../../components/todo-body/todo-body.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [SidebarComponent, TodoBodyComponent, HeaderComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
})
export class TodoPageComponent {}
