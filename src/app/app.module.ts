import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { ClockModule } from './clock/clock.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ComponentModule,ClockModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
