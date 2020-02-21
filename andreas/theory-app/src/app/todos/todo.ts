export class Todo {
    id: number;
    constructor(public userId: number, public title: string, public completed: boolean, public rating: number) {
    }
}
