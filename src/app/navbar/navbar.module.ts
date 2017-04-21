import { NavbarComponent } from './navbar/navbar.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from "./_services/navbar.service";

@NgModule({
  imports: [
    CommonModule,
    SidenavModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    NavbarService
  ]
})
export class NavbarModule { }
