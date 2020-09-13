import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '1',
        title: 'Learn React',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '2',
        title: 'Learn Vue',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '3',
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.unshift(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map((obj) => {
      if (obj.id == todo.id) {
        obj.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex((obj) => obj.id == todo.id);

    this.todos.splice(index, 1);
  }
}
