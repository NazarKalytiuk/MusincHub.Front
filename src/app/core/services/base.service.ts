import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class BaseService {

  public headers : Headers;
  public options : RequestOptions;
  public readonly HOST = 'http://localhost:8080/';
  constructor(private localstorage : LocalStorageService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('access_token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

}
