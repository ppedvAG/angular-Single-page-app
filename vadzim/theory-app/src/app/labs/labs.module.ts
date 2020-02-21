import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { OverviewComponent } from './overview/overview.component';
import { DiceComponent } from './dice/dice.component';
import { DiashowComponent } from './diashow/diashow.component';
import { MouseOverComponent } from './mouse-over/mouse-over.component';
import { TimerComponent } from './timer/timer.component';
import { PwconfirmComponent } from './pwconfirm/pwconfirm.component';
import { FormsModule } from '@angular/forms';
import { ActiveRouteComponent } from './active-route/active-route.component';


@NgModule({
  declarations: [
    TimeComponent, 
    OverviewComponent, 
    DiceComponent, 
    DiashowComponent,
    MouseOverComponent,
    TimerComponent,
    PwconfirmComponent,
    ActiveRouteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OverviewComponent    
  ]
})
export class LabsModule { }
