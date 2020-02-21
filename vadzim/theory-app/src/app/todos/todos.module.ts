import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosoverviewComponent } from './todosoverview/todosoverview.component';
import { RatingComponent } from './rating/rating.component';
import { TodotableComponent } from './todotable/todotable.component';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [TodosoverviewComponent, RatingComponent, TodotableComponent, AddFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodosoverviewComponent
  ]
})
export class TodosModule { }
