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
    redirectTo: "welcome",
    pathMatch: "full"
  },
  {
    path: "welcome",
    loadChildren: "./homepage/homepage.module#HomepageModule"
  },
  {
    path: "news",
    loadChildren: "./homepage/homepage.module#HomepageModule"
  },
    {
    path: "contact",
    loadChildren: "./homepage/homepage.module#HomepageModule"
  },
  {
    path: "home",
    loadChildren: "./homepage/homepage.module#HomepageModule"
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
