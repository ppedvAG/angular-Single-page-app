import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './labs/overview/overview.component';
import { TodosoverviewComponent } from './todos/todosoverview/todosoverview.component';

const routes: Routes = [
  { path: 'labs', component: OverviewComponent},
  { path: 'todos', component: TodosoverviewComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
