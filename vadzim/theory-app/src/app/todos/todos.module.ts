import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosoverviewComponent } from './todosoverview/todosoverview.component';
import { RatingComponent } from './rating/rating.component';
import { TodotableComponent } from './todotable/todotable.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosoverviewComponent, RatingComponent, TodotableComponent, AddFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosoverviewComponent
  ]
})
export class TodosModule { }
