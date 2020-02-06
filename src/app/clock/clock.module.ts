import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigiclockComponent } from './digiclock/digiclock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DigiclockComponent],
  exports:[DigiclockComponent]
})
export class ClockModule { }