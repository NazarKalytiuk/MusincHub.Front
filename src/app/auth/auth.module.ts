import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SignupPublisherComponent } from './signup-publisher/signup-publisher.component';
import { AuthService } from './services/auth.service';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signup/publisher', component: SignupPublisherComponent },
    ])
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    SignupPublisherComponent
  ],
  providers : [
    AuthService
  ]
})
export class AuthModule { }
