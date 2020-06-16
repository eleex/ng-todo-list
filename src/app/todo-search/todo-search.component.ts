import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css'],
})
export class TodoSearchComponent {
  @Output() searchInput = new EventEmitter<string>();

  searchPlaceholder = 'Search todo...';

  onChangeHandler(value: string) {
    this.searchInput.emit(value);
  }
}
