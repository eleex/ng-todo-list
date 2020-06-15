import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todo: Todo;

  @Output() delTodo = new EventEmitter<number>();

  impHandler() {
    this.todo.isImportant = !this.todo.isImportant;
  }

  doneHandler() {
    this.todo.isDone = !this.todo.isDone;
  }
  delHandler() {
    this.delTodo.emit(this.todo.id);
  }
}
