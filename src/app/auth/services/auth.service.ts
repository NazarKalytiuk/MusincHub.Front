import { LocalStorageService } from '../../core/services/local-storage.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../core/services/base.service';
import { RegisterConsumerRequestModel } from '../model/register-consumer-request-model';
import { Observable } from 'rxjs/Rx';
import { RegisterPublisherRequestModel } from '../model/register-publisher-request-model';
import { LoginRequestModel } from '../model/login-request-model';

@Injectable()
export class AuthService {

  constructor(private http: Http, private base: BaseService, private localStorageService : LocalStorageService) { }

  registerConsumer(model: RegisterConsumerRequestModel): Observable<any> {
    return this.http.post(`${this.base.HOST}account/register`, model);
  }
  registerPublisher(model: RegisterPublisherRequestModel): Observable<any> {
    return this.http.post(`${this.base.HOST}account/register/publisher`, model);
  }
  login(model: LoginRequestModel): void {
    this.http.post(`${this.base.HOST}account/login`, model).map(c => c.json()).subscribe(c => {
      this.localStorageService.setItem('access_token', c.accessToken);
      console.log(c.accessToken)
    });
  }

}
