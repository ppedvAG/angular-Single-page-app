import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-active-route',
  templateUrl: './active-route.component.html',
  styleUrls: ['./active-route.component.css']
})
export class ActiveRouteComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  readProps(): any {
    return Object.entries(this.route);
  }

  ngOnInit(): void {
  }

}
