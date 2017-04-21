import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { PublisherAlbumEditSongDialogComponent } from "app/publisher/publisher-album-edit-song-dialog/publisher-album-edit-song-dialog.component";
import { PublisherAlbumAddSongDialogComponent } from "app/publisher/publisher-album-add-song-dialog/publisher-album-add-song-dialog.component";
import { PublisherAlbumDeleteAlbumDialogComponent } from "app/publisher/publisher-album-delete-album-dialog/publisher-album-delete-album-dialog.component";

@Component({
  selector: 'app-publisher-album',
  templateUrl: './publisher-album.component.html',
  styleUrls: ['./publisher-album.component.scss']
})
export class PublisherAlbumComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }
  editSongOpenDialog() {
    let dialofRef = this.dialog.open(PublisherAlbumEditSongDialogComponent);
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

}
