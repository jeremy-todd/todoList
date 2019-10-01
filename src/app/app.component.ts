import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List';
  todoTitle: string;
  todoList: ITodo[] = [];
  todoId: number;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoId = 1;
    this.todoTitle = '';
    this.todoList = this.todoService.getTodoItems();
    this.todoList.push({
      id: this.todoId,
      title: "Install Angular CLI",
      isDoing: false,
      isDone: false,
      isEditing: false,
    });
  }

  /*addTodo(): void {
    this.todoId++;
    this.todoService.addTodo({
      id: this.todoId,
      isDoing: false,
      isEditing: false,
      title: this.todoTitle,
      isDone: false,
    });
    this.todoTitle = "";
  }*/

  addTodo(todo: ITodo): void {
    this.todoService.addTodo(todo);
  }

  deleteTodo(todo: ITodo): void {
    this.todoService.deleteTodo(todo);
  }

  completeTodo(todo: ITodo): void {
    this.todoService.completeTodo(todo);
  }

  reopenTodo(todo: ITodo): void {
    this.todoService.reopenTodo(todo);
  }
}