import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ConsumerPlaylistAddComponent } from './consumer-playlist-add/consumer-playlist-add.component';
import { Playlist } from '../../core/models/playlist';
import { PlaylistService } from '../consumer-playlist/playlist.service';

@Component({
  selector: 'consumer-consumer-playlist-list',
  templateUrl: './consumer-playlist-list.component.html',
  styleUrls: ['./consumer-playlist-list.component.scss']
})
export class ConsumerPlaylistListComponent implements OnInit {

  playlists : Array<Playlist>
  constructor(private dialog: MdDialog, private playlistService : PlaylistService) { }

  ngOnInit() {
    this.playlistService.getPlaylists().subscribe(c => this.playlists = c);
  }

  addNew() {
    let dialofRef = this.dialog.open(ConsumerPlaylistAddComponent);
    dialofRef.afterClosed().subscribe(s => console.log(s))
  }

}
