import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ])
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
})
export class AuthModule { }
