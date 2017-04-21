import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from "./_services/menu.service";

@NgModule({
  imports: [
    CommonModule,
    // NavbarModule,
    RouterModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: [
    MenuService
  ]
})
export class SidenavModule { }
