import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosoverviewComponent } from './todosoverview/todosoverview.component';

@NgModule({
  declarations: [TodosoverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodosoverviewComponent
  ]
})
export class TodosModule { }
