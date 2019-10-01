import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [];

  constructor() { }

  getTodoItems() {
    return this.todoList;
  }

  //add a todo item
  addTodo(todo: ITodo): void {
    this.todoList.push(todo);
  }

  //delete a todo item
  deleteTodo(todo: ITodo):void {
    console.log("delete methods was called in todo.services " + todo)
    const index = this.todoList.indexOf(todo, 0);
    this.todoList.splice(index, 1);
  }

  //complete a todo item
  completeTodo(todo: ITodo) {
    todo.isDone = true;
  }

  //reopen a todo item
  reopenTodo(todo: ITodo) {
    todo.isDone = false;
  }
}