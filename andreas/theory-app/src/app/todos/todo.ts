export class Todo {
  id: number;

  constructor(public userId: number, public title: string, public completed: boolean = false, public rating: number = 0) {
  }
}
