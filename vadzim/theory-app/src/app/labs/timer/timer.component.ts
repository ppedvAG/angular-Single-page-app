import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
@Input() seconds: number;
@Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
@Output() tickEvent: EventEmitter<number> = new EventEmitter<number>();
@Output() endEvent: EventEmitter<string> = new EventEmitter<string>();

remainingTime: number;
intervalId: number;
endMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.startEvent.emit();
    this.remainingTime = this.seconds;
    this.intervalId = window.setInterval(() => {
      this.remainingTime--;
      this.tickEvent.emit(this.remainingTime);
      if (this.remainingTime === 0) {
        this.endMessage = "Meldung von der Kindkomponente: time is over";
        this.endEvent.emit(this.endMessage);
        clearInterval(this.intervalId);        
      }
    }, 1000);
  }
}
