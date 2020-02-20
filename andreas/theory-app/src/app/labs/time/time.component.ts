import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit, OnDestroy {

  date: Date;
  timeString: string;
  private timerInterval: number;

  constructor() {
    this.showTime();
    this.timerInterval = window.setInterval(() => this.showTime(), 1000);
  }

  showTime(): void {
    this.date = new Date();
    this.timeString = this.date.toLocaleTimeString();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if(this.timerInterval) {
      console.log('timerInterval is present and will be cleared')
      window.clearInterval(this.timerInterval);
    }
  }

}
