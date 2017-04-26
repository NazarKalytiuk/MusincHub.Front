import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../core/models/playlist';
import { PlaylistService } from '../consumer-playlist/playlist.service';
import { Album } from '../../core/models/album';
import { AlbumService } from '../consumer-album/album.service';
import { AuthorService } from '../author.service';
import { Author } from '../../core/models/author';

@Component({
  selector: 'consumer-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {
  
  playlists : Array<Playlist>;
  topAlbums : Array<Album>;
  topAuthors : Array<Author>
  constructor(private playlistService : PlaylistService, private albumService : AlbumService, private authorService: AuthorService,) { }

  ngOnInit() {
    this.playlistService.getPlaylists().subscribe(c => this.playlists = c);
    this.albumService.getAlbums().subscribe(c => this.topAlbums = c);
    this.authorService.getAuthors().subscribe(c => this.topAuthors = c);
  }

}
