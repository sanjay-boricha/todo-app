import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

import { v4 as uuid4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todoTitle: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo() {
    const newTodo: Todo = {
      id: uuid4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date(),
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle = '';
  }
}
