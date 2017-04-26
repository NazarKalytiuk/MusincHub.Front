import { ViewChild, Injectable } from '@angular/core';
import { Song } from '../../core/models/song';
import { PlayerService } from '../_services/player.service';
import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'player-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('audio') audio : ElementRef;
  player : HTMLMediaElement;
  queue: Array<Song>;
  currentSong: any;
  currentSongIndex: number;
  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.audio.nativeElement;
    this.currentSong = { id: '0', name: '', albumId: '', url: '' };

    this._playerService.getMessage()
      .filter(c => this.currentSong === c)
      .filter(c => c.isPlaying === false)
      .subscribe(c => this.player.pause());

    this._playerService.getMessage()
      .filter(c => this.currentSong === c)
      .filter(c => c.isPlaying === true)
      .subscribe(c => this.player.play());

    this._playerService.getMessage()
      .filter(c => this.currentSong.id !== c.id)
      .subscribe(c => {
        this.currentSong = c;
        this.player.load();
        this.player.play();
      });
    this.currentSongIndex = 0;
  }
  // getNextSong() {
  //   if (this.currentSongIndex + 1 < this.queue.length) {
  //     this.currentSong = this.queue[this.currentSongIndex + 1];
  //     this.currentSongIndex += 1;
  //   } else {
  //     this.currentSong = this.queue[0];
  //     this.currentSongIndex = 0;
  //   }
  // }
  // onEnded() {
  //   this.getNextSong();
  //   this.player.load();
  //   this.player.play();
  // }

}
