import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  zahl: number;
  // zahl: number = 6;

  constructor() { 
    this.zahl = Math.ceil(Math.random()*6);
  }

  getFontSize(): number {
    return this.zahl * 10;
  }

  ngOnInit(): void {
  }

}
