import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() itemsList: Todo[];

  @Output() delTodo = new EventEmitter<number>();

  onDelTodo(id: number): void {
    this.delTodo.emit(id);
  }
}
