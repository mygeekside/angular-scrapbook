import { NgModule } from "@angular/core";

import {
  Routes,
  RouterModule,
  NoPreloading,
  PreloadAllModules
} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "stopwatch",
    pathMatch: "full"
  },
  {
    path: "welcome",
    loadChildren: "./homepage/homepage.module#HomepageModule"
  },
  {
    path: "clock",
    loadChildren: "./clock/clock.module#ClockModule"
  },
    {
    path: "stopwatch",
    loadChildren: "./stopwatch/stopwatch.module#StopwatchModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
