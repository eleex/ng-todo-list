import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() delTodo = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

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
