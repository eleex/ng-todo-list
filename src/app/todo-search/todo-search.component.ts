import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css'],
})
export class TodoSearchComponent {
  searchPlaceholder = 'Search todo...';

  constructor(private todoService: TodoService) {}

  onChangeHandler(searchValue: string) {
    this.todoService.setTerm(searchValue);
  }
}
