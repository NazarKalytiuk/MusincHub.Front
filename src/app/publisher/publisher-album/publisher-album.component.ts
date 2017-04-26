import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { PublisherAlbumDeleteSongDialogComponent } from "app/publisher/publisher-album/publisher-album-delete-song-dialog/publisher-album-delete-song-dialog.component";
import { PublisherAlbumAddSongDialogComponent } from "app/publisher/publisher-album/publisher-album-add-song-dialog/publisher-album-add-song-dialog.component";
import { PublisherAlbumDeleteAlbumDialogComponent } from "app/publisher/publisher-album/publisher-album-delete-album-dialog/publisher-album-delete-album-dialog.component";
import { PublisherAlbumChangeNameDialogComponent } from './publisher-album-change-name-dialog/publisher-album-change-name-dialog.component';

@Component({
  selector: 'app-publisher-album',
  templateUrl: './publisher-album.component.html',
  styleUrls: ['./publisher-album.component.scss']
})
export class PublisherAlbumComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }
  deleteSongOpenDialog() {
    let dialofRef = this.dialog.open(PublisherAlbumDeleteSongDialogComponent);
    dialofRef.afterClosed().subscribe(s => console.log(s))
  }
  addSongOpenDialog() {
    let dialofRef = this.dialog.open(PublisherAlbumAddSongDialogComponent);
    dialofRef.afterClosed().subscribe(s => console.log(s))
  }
  deleteAlbumOpenDialog() {
    let dialofRef = this.dialog.open(PublisherAlbumDeleteAlbumDialogComponent);
    dialofRef.afterClosed().subscribe(s => console.log(s))
  }
  changeAlbumNameOpenDialog() {
    let dialofRef = this.dialog.open(PublisherAlbumChangeNameDialogComponent);
    dialofRef.afterClosed().subscribe(s => console.log(s))
  }

}
