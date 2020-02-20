import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { OverviewComponent } from './overview/overview.component';
import { DiceComponent } from './dice/dice.component';
import { DiashowComponent } from './diashow/diashow.component';

@NgModule({
  declarations: [TimeComponent, OverviewComponent, DiceComponent, DiashowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewComponent    
  ]
})
export class LabsModule { }
