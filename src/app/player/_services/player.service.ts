import { Song } from '../../core/models/song';
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
    <Song>{ id: "1", name: "Alma - Requime", duration: "3:03", url: "../src/Alma-Requiem.mp3", isPlaying : false },
    <Song>{ id: "2", name: "Eminen - Lose Yourself", duration: "5:26", url: "../src/Eminem-Lose Yourself.mp3", isPlaying : false },
    <Song>{ id: "3", name: "FloRida - My House", duration: "3:12", url: "../src/FloRida-MyHouse.mp3", isPlaying : false }
  ]
  }

}
