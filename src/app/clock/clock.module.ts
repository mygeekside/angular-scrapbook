import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockRoutingModule } from './clock.routes';
import { DigiclockComponent } from './digiclock/digiclock.component';

@NgModule({
  imports: [
    CommonModule, ClockRoutingModule
  ],
  declarations: [DigiclockComponent],
  exports:[DigiclockComponent]
})
export class ClockModule { }