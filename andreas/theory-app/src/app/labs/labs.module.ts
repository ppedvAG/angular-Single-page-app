import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { OverviewComponent } from './overview/overview.component';
import { DiceComponent } from './dice/dice.component';
import { DiashowComponent } from './diashow/diashow.component';
import { HomeAwayComponent } from './home-away/home-away.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';



@NgModule({
  declarations: [TimeComponent, OverviewComponent, DiceComponent, DiashowComponent, HomeAwayComponent, ClickCounterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class LabsModule { }
