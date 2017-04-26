import { AlbumService } from './album.service';
import { Route } from '@angular/router/router';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../core/models/album';
import { BaseService } from '../../core/services/base.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Song } from '../../core/models/song';
import { PlayerService } from '../../player/_services/player.service';

@Component({
  selector: 'consumer-consumer-album',
  templateUrl: './consumer-album.component.html',
  styleUrls: ['./consumer-album.component.scss']
})
export class ConsumerAlbumComponent implements OnInit {

  album: Album;
  songs: Array<Song>;
  constructor(private baseService: BaseService, private player: PlayerService, private albumService: AlbumService, private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.albumService.getAlbumById(params['id']).subscribe(c => this.album = c);
      this.albumService.getSongs(params['id']).subscribe(c => this.songs = c);
    })
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

}
