import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {
  public counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public increaseCounter() {
      this.counter ++;
  }
}
