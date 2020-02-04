import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Footer/footer/footer.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { SearchbarComponent } from './Searchbar/searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, NavbarComponent, SearchbarComponent]
})
export class CommonModule { }