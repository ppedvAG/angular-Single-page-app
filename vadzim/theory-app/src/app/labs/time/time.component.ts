import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit, OnDestroy {

  date: Date;
  timestring: string;
  private intervalId: number;
  // private intervalId: TimeInterval<number>;
  // #todo
  // variante mit Timeout und TimeInterval !

  constructor() {
    this.intervalId = window.setInterval(() => this.showTime(), 1000);
    // this.intervalId = setInterval(() => this.showTime(), 1000);
  }

  showTime(): void {
    this.date = new Date();
    this.timestring = this.date.toLocaleTimeString();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      // clearInterval(this.intervalId);
    }


  }



}
