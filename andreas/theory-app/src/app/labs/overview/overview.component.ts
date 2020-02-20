import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    console.log('Lab OverviewComponent destroy');
  }

}
