import { Component, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  inpValue = '';

  isDisabled = true;

  constructor(private todoService: TodoService) {}

  onChangeInput() {
    this.isDisabled = this.inpValue.trim() === '' ? true : false;
  }

  addTodo() {
    if (this.inpValue.trim()) {
      this.todoService.addTodo(this.inpValue);

      this.inpValue = '';
    }
  }
}
