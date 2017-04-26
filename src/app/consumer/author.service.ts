import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BaseService } from '../core/services/base.service';
import { Http } from '@angular/http';
import { Author } from '../core/models/author';
import { Album } from '../core/models/album';

@Injectable()
export class AuthorService {

  constructor(private baseService : BaseService, private http : Http) { }

  getAuthors() : Observable<Array<Author>> {
    return this.http.get(`${this.baseService.HOST}/author`, this.baseService.options).map(c => c.json() as Array<Author>);
  }
  getAuthor(id : string) : Observable<Author>{
    return this.http.get(`${this.baseService.HOST}/author/${id}`, this.baseService.options).map(c => c.json() as Author);
  }
  getAlbums(id : string) : Observable<Array<Album>> {
    return this.http.get(`${this.baseService.HOST}/author/${id}/albums`, this.baseService.options).map(c => c.json() as Array<Album>);
  }

}
