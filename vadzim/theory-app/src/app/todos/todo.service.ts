import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = '/assets/todos.json';
  // private todosUrl = 'http://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient,
    private ms: MessageService
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
    .pipe(
      tap(_ => this.log('geholt todos')),
      catchError(this.buildErrorCallback('getTodos', []))
    )
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
    .pipe(
      tap((newTodo: Todo) => this.log(`todo hinzugefügt mit der id= ${newTodo.id}`)),
      catchError(this.buildErrorCallback<Todo>('addTodo', todo))
    );
  }

  log(message: string) {
    this.ms.add(`TodoService: ${message}`)
  }

  buildErrorCallback<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
