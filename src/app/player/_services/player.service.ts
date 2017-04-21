import { Song } from '../_model/song';
import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  constructor() { }

  private subject = new Subject<any>();

  sendMessage(message: Song) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getMusic() {
    return [
    <Song>{ Id: "1", Name: "Alma - Requime", Duration: "3:03", Url: "../src/Alma-Requiem.mp3", IsPlaying : false },
    <Song>{ Id: "2", Name: "Eminen - Lose Yourself", Duration: "5:26", Url: "../src/Eminem-Lose Yourself.mp3", IsPlaying : false },
    <Song>{ Id: "3", Name: "FloRida - My House", Duration: "3:12", Url: "../src/FloRida-MyHouse.mp3", IsPlaying : false }
  ]
  }

}
