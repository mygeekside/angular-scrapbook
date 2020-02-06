import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StopwatchComponent } from "./stopwatch/stopwatch.component";
import { StopwatchRoutingModule } from "./stopwatch.routes";

@NgModule({
  imports: [CommonModule, StopwatchRoutingModule],
  declarations: [StopwatchComponent]
})
export class StopwatchModule {}
