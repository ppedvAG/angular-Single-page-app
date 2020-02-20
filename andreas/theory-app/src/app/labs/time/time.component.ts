import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  date: Date;
  timeString: string;

  constructor() {
    window.setInterval(() => this.showTime(), 1000);
  }

  showTime(): void {
    this.date = new Date();
    this.timeString = this.date.toLocaleTimeString();
  }

  ngOnInit(): void {

  }

}
