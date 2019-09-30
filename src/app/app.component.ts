import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number;

  ngOnInit() {
    this.todoId = 1;
    this.todoTitle = '';
    this.todoList = [];
  }

  //method to delete an item
  deleteTodo(todo:any) {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
  }

  //method to complete an item
  completeTodo(todo:any) {
    todo.isDone = true;
    todo.todoTimeCompleted = new Date();
  }

  reopenTodo(todo:any) {
    todo.isDone = false;
    todo.todoTimeCompleted = '';
  }

  //method to add an item
  addTodo():void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      isDone: false,
      isDoing: false,
      isEditing: false,
    });

    //resets our todoTitle variable to an empty string
    this.todoTitle = '';
    this.todoId++;
  }
}