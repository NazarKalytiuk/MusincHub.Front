import { Injectable } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { Http } from '@angular/http';
import { Album } from '../../core/models/album';
import { Observable } from 'rxjs/Rx';
import { Song } from '../../core/models/song';

@Injectable()
export class AlbumService {

  constructor(private baseService: BaseService, private http: Http) { }

  getAlbums(): Observable<Array<Album>> {
    return this.http.get(`${this.baseService.HOST}album`, this.baseService.options).map(c => c.json() as Array<Album>);
  }
  getAlbumById(id: string): Observable<Album> {
    return this.http.get(`${this.baseService.HOST}album/${id}`, this.baseService.options).map(c => c.json() as Album)
  }
  getSongs(id: string): Observable<Array<Song>> {
    return this.http.get(`${this.baseService.HOST}album/${id}/songs`, this.baseService.options).map(c => c.json() as Array<Song>)
  }
}
