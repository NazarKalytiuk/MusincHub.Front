import { MenuItem } from '../_model/menu';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  private show = new Subject<any>();
  public menu = new Subject<any>();
  private primaryMenu = new Array<MenuItem>(
    { url: "consumer", icon: "person", text: "Профіль" },
    { url: "consumer/author/1", icon: "person", text: "Автор" },
    { url: "consumer/album/1", icon: "person", text: "Альбом" },
    { url: "consumer/playlist", icon: "person", text: "Плейлісти" },
    { url: "consumer/playlist/1", icon: "person", text: "Плейліст" },
  );
  private secondaryMenu = new Array<MenuItem>(
    { url: "publisher", icon: "settings", text: "Налаштування" },
    { url: "publisher/album", icon: "help", text: "Альбоми" },
    { url: "publisher/album/1", icon: "exit_to_app", text: "Альбом" },
  );
  constructor() { }

  getMenu(): Observable<any> {
    this.menu.next(this.primaryMenu);
    return this.menu.asObservable();
  }
  getSecondaryMenu(): Observable<any> {
    this.menu.next(this.secondaryMenu);
    return this.menu.asObservable();
  }


  getShow(): Observable<any> {
    this.show.next(true);
    return this.show.asObservable();
  }

}
