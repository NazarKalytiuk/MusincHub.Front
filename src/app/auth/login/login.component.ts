import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = 'eminem@gmail.com  ';
  password: string = 'eminem';
  error: string;
  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }
  Login() {
    this.auth.login({'username' : this.login, 'password' : this.password});
    this.router.navigate(['/consumer']);
  }

}
