import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabsModule } from './labs/labs.module';
import { TodosModule } from './todos/todos.module';



@NgModule({
  declarations: [
    AppComponent // af: list all components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabsModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent] // af: bootstrap options
})
export class AppModule { }
