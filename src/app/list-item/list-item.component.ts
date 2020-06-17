import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  impHandler() {
    this.todo.isImportant = !this.todo.isImportant;
  }

  doneHandler() {
    this.todo.isDone = !this.todo.isDone;
  }

  delHandler() {
    this.todoService.delTodo(this.todo.id);
  }
}
