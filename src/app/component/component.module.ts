import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, NavbarComponent, SearchbarComponent]
})
export class ComponentModule { }