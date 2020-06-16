import { Component } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  isImportant: boolean;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List';

  todoList: Todo[] = [
    { id: 1, title: 'Drink Coffe', isImportant: true, isDone: true },
    { id: 2, title: 'Learn Angular', isImportant: false, isDone: false },
    {
      id: 3,
      title: 'Create Angular App',
      isImportant: false,
      isDone: false,
    },
  ];

  term = '';

  filteredTodo = this.filterTodo();

  currentId = 20;

  onAdd(title: string) {
    const todo: Todo = {
      id: this.currentId,
      title,
      isImportant: false,
      isDone: false,
    };

    this.todoList.unshift(todo);
    this.filteredTodo = this.filterTodo();

    this.currentId++;
  }

  onDelete(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    this.filteredTodo = this.filterTodo();
  }

  onSearch(term: string) {
    this.term = term;
    this.filteredTodo = this.filterTodo();
  }

  filterTodo() {
    return this.todoList.filter((todo) =>
      todo.title.toLowerCase().includes(this.term.toLowerCase())
    );
  }
}
