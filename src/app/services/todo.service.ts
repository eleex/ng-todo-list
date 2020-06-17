import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: Todo[] = [
    { id: 1, title: 'Drink Coffe', isImportant: true, isDone: true },
    { id: 2, title: 'Learn Angular', isImportant: false, isDone: false },
    {
      id: 3,
      title: 'Create Angular App',
      isImportant: false,
      isDone: false,
    },
  ];

  currentId = 20;

  term = '';

  getTodoList(): Todo[] {
    return this.todoList;
  }

  addTodo(title: string): void {
    const todo = {
      id: this.currentId,
      title,
      isImportant: false,
      isDone: false,
    };
    this.todoList.unshift(todo);

    this.currentId++;
  }

  delTodo(id: number): void {
    const index = this.todoList.findIndex((todo) => todo.id === id);

    this.todoList.splice(index, 1);
  }

  setTerm(term: string) {
    this.term = term;
  }
}
