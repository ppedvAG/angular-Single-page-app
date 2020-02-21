import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-over',
  templateUrl: './mouse-over.component.html',
  styleUrls: ['./mouse-over.component.css']
})
export class MouseOverComponent implements OnInit {
  isHome: boolean = false;
  text: string = 'mouse over me'

  constructor() { }

  ngOnInit(): void {
  }

  home(ev){
    this.isHome = true;
    // ev.innerText = this.getText()
  }

  away(ev){
    this.isHome = false;
    // ev.innerText = this.getText()
  }

  getText() {
    return this.isHome ? 'Home' : 'Away';
  }
}
