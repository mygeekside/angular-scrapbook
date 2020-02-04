import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomepageModule } from './homepage/hompepage.module';
// import { CommonModule } from './common/common.module';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HomepageModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
