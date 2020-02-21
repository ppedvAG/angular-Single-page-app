import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-route',
  templateUrl: './active-route.component.html',
  styleUrls: ['./active-route.component.css']
})
export class ActiveRouteComponent implements OnInit {

  public actRouteProps: any;

  constructor(private route: ActivatedRoute) { }

  readProps(): void {
    this.actRouteProps = Object.entries(this.route);
  }

  ngOnInit(): void {
    this.readProps();
  }

}
