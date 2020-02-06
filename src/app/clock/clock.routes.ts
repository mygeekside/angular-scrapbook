import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DigiclockComponent } from "./digiclock/digiclock.component";

const routes: Routes = [
  {
    path: "",
    component: DigiclockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClockRoutingModule {}