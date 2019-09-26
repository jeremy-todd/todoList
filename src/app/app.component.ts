import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List';
  todoList: any [] = [];
  todoTitle: string;
  timeNow: Date;

  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      //example of how to make an item in todo list
      { title: 'Install Angluar CLI', isDone: false, todoTimeEntered: new Date('2019-09-21 17:30:25')},
      { title: 'Complete the assignment for today', isDone: false, todoTimeEntered: new Date('2019-09-25 18:15:29')}
    ];
    this.timeNow = new Date();
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
    //gets current time when todo is added
    this.timeNow = new Date();

    this.todoList.push({
      title: this.todoTitle,
      isDone: false,
      todoTimeEntered: this.timeNow
    });

    //resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }
}