import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { OverviewComponent } from './overview/overview.component';
import { DiceComponent } from './dice/dice.component';
import { DiashowComponent } from './diashow/diashow.component';
import { HomeAwayComponent } from './home-away/home-away.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { TimerComponent } from './timer/timer.component';
import { PasswordConfirmComponent } from './password-confirm/password-confirm.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [TimeComponent, OverviewComponent, DiceComponent, DiashowComponent, HomeAwayComponent, ClickCounterComponent, TimerComponent, PasswordConfirmComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class LabsModule { }
