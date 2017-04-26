import { LocalStorageService } from '../../core/services/local-storage.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { BaseService } from '../../core/services/base.service';
import { Playlist } from '../../core/models/playlist';
import { Song } from '../../core/models/song';

@Injectable()
export class PlaylistService {
  constructor(private http: Http, private baseService: BaseService, private localStorage : LocalStorageService) { 
  }

  public getPlaylists(): Observable<Array<Playlist>> {
    return this.http.get(`${this.baseService.HOST}playlist`, this.baseService.options).map(c => c.json() as Array<Playlist>)
  }
  public getPlaylist(id : string) : Observable<Playlist> {
    console.log(this.baseService.headers);
    return this.http.get(`${this.baseService.HOST}playlist/${id}`, this.baseService.options).map(c => c.json() as Playlist)
  }
  public getSongsByPlaylistId(id : string) : Observable<Array<Song>>{
    return this.http.get(`${this.baseService.HOST}playlist/${id}/songs`, this.baseService.options).map(c => c.json() as Array<Song>)
  }
}
