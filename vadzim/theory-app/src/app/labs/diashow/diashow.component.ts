import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-diashow',
  templateUrl: './diashow.component.html',
  styleUrls: ['./diashow.component.css']
})
export class DiashowComponent implements OnInit {
  @Input() images: string[];
  activeImg = 0;
  private intervId: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.activeImg === 3 ? this.activeImg = 0 : this.activeImg++
    }, 2000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervId);
    console.log('this.intervId :', this.intervId);
  }

}
