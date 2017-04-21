import { Song } from '../_model/song';
import { PlayerService } from '../_services/player.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'player-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  queue: Song[];
  currentSong: Song = new Song();
  currentSongIndex: number;
  player: HTMLMediaElement;
  constructor(private _playerService: PlayerService, private el: ElementRef) { }

  ngOnInit() {
    this.player = this.el.nativeElement.getElementsByTagName('audio')[0];
    console.log(this.player);
    this.queue = this._playerService.getMusic();

    this._playerService.getMessage()
      .filter(c => this.currentSong === c)
      .filter(c => c.IsPlaying === false)
      .subscribe(c => this.player.pause());

    this._playerService.getMessage()
      .filter(c => this.currentSong === c)
      .filter(c => c.IsPlaying === true)
      .subscribe(c => this.player.play());

    this._playerService.getMessage()
      .filter(c => this.currentSong.Id !== c.Id)
      .subscribe(c => {
        this.currentSong = c;
        this.player.load();
        this.player.play();
      });
    this.currentSongIndex = 0;
  }
  getNextSong() {
    if (this.currentSongIndex + 1 < this.queue.length) {
      this.currentSong = this.queue[this.currentSongIndex + 1];
      this.currentSongIndex += 1;
    } else {
      this.currentSong = this.queue[0];
      this.currentSongIndex = 0;
    }
  }
  onEnded() {
    this.getNextSong();
    this.player.load();
    this.player.play();
  }

}
