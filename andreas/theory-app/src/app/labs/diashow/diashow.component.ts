import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-diashow',
  templateUrl: './diashow.component.html',
  styleUrls: ['./diashow.component.css']
})
export class DiashowComponent implements OnInit, OnDestroy {

  @Input() images: string[] = [];
  private imageInterval: number; // alternative NodeJS.Timeout for server side rendering
  imageIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.imageInterval = setInterval(() => {
      if(this.imageIndex < this.images.length-1) {
        this.imageIndex++;
      } else {
        this.imageIndex = 0;
      }
    }, 1000);
    console.log(this.images[this.imageIndex]);
  }

  public ngOnDestroy(): void {
    if(this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

}
