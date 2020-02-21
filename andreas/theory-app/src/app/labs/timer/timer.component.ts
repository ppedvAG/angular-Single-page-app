import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() seconds: number;
  @Output() start: EventEmitter<void> = new EventEmitter<void>();
  @Output() tick: EventEmitter<number> = new EventEmitter<number>();
  @Output() end: EventEmitter<string> = new EventEmitter<string>();

  remainingTime: number = 10;
  private intervalID: number;

  constructor() { }

  ngOnInit(): void {
  }

  public handleClick() {
    this.start.emit();
    this.intervalID = setInterval(() => {
      this.remainingTime--;
      this.tick.emit(this.remainingTime);
      if(this.remainingTime === 0) {
        this.end.emit("Meldung von der Kindkomponente: time is over");
        clearInterval(this.intervalID)
      }
    },1000)

  }

  public handleReset() {
    this.remainingTime = this.seconds;
  }
}
