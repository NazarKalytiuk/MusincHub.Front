import { forEach } from '@angular/router/src/utils/collection';
import { Song } from '../../player/_model/song';
import { PlayerService } from '../../player/_services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consumer-consumer-playlist',
  templateUrl: './consumer-playlist.component.html',
  styleUrls: ['./consumer-playlist.component.scss']
})
export class ConsumerPlaylistComponent implements OnInit {

  songs: Song[] = [
    { Id: "1", Name: "Alma - Requime", Duration: "3:03", Url: "../src/Alma-Requiem.mp3", IsPlaying: false },
    { Id: "2", Name: "Eminen - Lose Yourself", Duration: "5:26", Url: "../src/Eminem-Lose Yourself.mp3", IsPlaying: false },
    { Id: "3", Name: "FloRida - My House", Duration: "3:12", Url: "../src/FloRida-MyHouse.mp3", IsPlaying: false }
  ]
  constructor(private player: PlayerService) { }

  ngOnInit() {
  }

  play(song: Song) {
    this.songs.forEach(element => {
      if (element.Id === song.Id) {

      } else {
        element.IsPlaying = false;
      }
    });
    if (song.IsPlaying === true) {
      song.IsPlaying = false;
      this.player.sendMessage(song);
    } else {
      song.IsPlaying = true;
      this.player.sendMessage(song);
    }
  }

  rate(song: Song) {
    console.log(song);
  }

}
