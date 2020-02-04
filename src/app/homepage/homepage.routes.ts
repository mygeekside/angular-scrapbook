import { NgModule } from "@angular/core";
import { WelcomeComponent } from './welcome/welcome.component';

import {
  Routes,
  RouterModule,
  NoPreloading,
  PreloadAllModules
} from "@angular/router";

const routes: Routes = [
  {
      path: '',
    component: WelcomeComponent
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
export class HomeRoutingModule {}