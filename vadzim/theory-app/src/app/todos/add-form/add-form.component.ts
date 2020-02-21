import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  todo: Todo;


  constructor(private ts: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(halbtodo){
    
    this.todo = new Todo(halbtodo.user.value, halbtodo.title.value, false, halbtodo.rating.value)
    /* this.ts.addTodo(this.todo)
    .subscribe(todo => {this.todos.push(todo)}); */
  }
}
