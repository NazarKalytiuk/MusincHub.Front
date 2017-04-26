import { OnDestroy } from '@angular/core/core';
import { PlaylistService } from './playlist.service';
import { ActivatedRoute, Params } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { PlayerService } from '../../player/_services/player.service';
import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../core/models/playlist';
import { Song } from '../../core/models/song';
import { Observable } from 'rxjs/Rx';
import { PreloaderComponent } from "app/core/preloader/preloader.component";

@Component({
  selector: 'consumer-consumer-playlist',
  templateUrl: './consumer-playlist.component.html',
  styleUrls: ['./consumer-playlist.component.scss']
})
export class ConsumerPlaylistComponent implements OnInit, OnDestroy {

  playlist: Playlist;
  // songs: Song[] = [
  //   { Id: "1", Name: "Alma - Requime", Duration: "3:03", Url: "../src/Alma-Requiem.mp3", IsPlaying: false },
  //   { Id: "2", Name: "Eminen - Lose Yourself", Duration: "5:26", Url: "../src/Eminem-Lose Yourself.mp3", IsPlaying: false },
  //   { Id: "3", Name: "FloRida - My House", Duration: "3:12", Url: "../src/FloRida-MyHouse.mp3", IsPlaying: false }
  // ]
  songs: Array<Song>;
  constructor(private pre: PreloaderComponent, private player: PlayerService, private route: ActivatedRoute, private playlistService: PlaylistService) { }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .forEach((params: Params) => {
        var a1 = this.playlistService.getPlaylist(params['id']);
        var a2 = this.playlistService.getSongsByPlaylistId(params['id']);
        Observable.forkJoin(a1, a2).subscribe(c => {
          this.playlist = c[0];
          this.songs = c[1];
        }, error => console.log(error), () => 
        // this.pre.close()
        {}
        );
      });
  }

  play(song: Song) {
    console.log(song)
    this.songs.forEach(element => {
      if (element.id === song.id) {

      } else {
        element.isPlaying = false;
      }
    });
    if (song.isPlaying === true) {
      song.isPlaying = false;
      this.player.sendMessage(song);
    } else {
      song.isPlaying = true;
      this.player.sendMessage(song);
    }
  }

  rate(song: Song) {
    console.log(song);
  }


  public ngOnDestroy(): void {
    // this.pre.open();
  }
}
