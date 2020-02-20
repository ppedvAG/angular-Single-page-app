import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() starsNumber: number;
  starsString: string;
  constructor() { }

  ngOnInit(): void {
    this.starsString = '⭐'.repeat(this.starsNumber);
  }
}
