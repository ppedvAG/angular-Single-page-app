import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-todosoverview',
  templateUrl: './todosoverview.component.html',
  styleUrls: ['./todosoverview.component.css']
})
export class TodosoverviewComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('TodosoverviewComponent destroy');
  }
}
