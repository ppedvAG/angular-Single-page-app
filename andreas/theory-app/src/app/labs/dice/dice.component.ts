import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})

export class DiceComponent implements OnInit {
  zahl: number;
  @Input() forceBingo: boolean = false;
  constructor() {
    this.zahl = Math.ceil(Math.random()*6);
  }

  getFontSize() {
    return 8*this.zahl;
  }

  isBingo() {
    return this.forceBingo || this.zahl === 6;
  }

  ngOnInit(): void {
  }

}
