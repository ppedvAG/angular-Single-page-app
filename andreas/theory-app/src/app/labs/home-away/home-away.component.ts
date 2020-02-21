import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-home-away", templateUrl: "./home-away.component.html", styleUrls: ["./home-away.component.css"]
})
export class HomeAwayComponent implements OnInit {

  label: string = "";
  public classNames: string[] = [];

  constructor(elm: ElementRef) {
    this.label = elm.nativeElement.getAttribute("label");
  }

  ngOnInit(): void {
  }

  public mouseOver($event: MouseEvent) {
    this.label = "Away";
    this.classNames.push("active");

    console.log("mouseOver: ", $event);
  }

  public mouseOut($event: MouseEvent) {
    this.label = "Home";
    console.log("mouseOut: ", $event);
    this.classNames = [];
  }

}
