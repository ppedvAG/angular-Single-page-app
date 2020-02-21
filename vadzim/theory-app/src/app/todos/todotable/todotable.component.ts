import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})
export class TodotableComponent implements OnInit {
  todos: Todo[];

  constructor(private ts: TodoService) { }

  ngOnInit(): void {
    // schnelle Variante
 /*    fetch('/assets/todos.json')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => this.todos = json) */
      this.getTodos();
  }

  getTodos(): void {
    this.ts.getTodos()
    .subscribe(todos => this.todos = todos);
  }

}
