import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();

  inpValue = '';

  addTodoHandler() {
    if (this.inpValue.trim()) {
      this.addTodo.emit(this.inpValue);
      this.inpValue = '';
    }
  }
}
