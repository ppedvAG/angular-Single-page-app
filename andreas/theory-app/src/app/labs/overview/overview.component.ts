import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    console.log('Lab OverviewComponent destroy');
  }

  public onStart() {
    console.log("onStart");
  }

  public onTick(number) {
    console.log("onTick", number);
  }

  public onEnd(message:string) {
    console.log("onEnd", message);
  }

}
