import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  startMessage: string;
  timerMessage: string;
  endMessage: string;
  endMessageFromChild: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleStart() {
    this.startMessage = "Time is started";
  }

  handleTick(seconds: number) {
    this.timerMessage = `Remaining time ${seconds}`;
    if (seconds === 0) {
      this.endMessage = 'Time is over';
    }
  }

  handleEnd(msg: string) {
    this.endMessageFromChild = msg;
  }

}
