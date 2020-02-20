import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})
export class TodotableComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    // schnelle Variante
    fetch('/assets/todos.json')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => this.todos = json)
  }

}
