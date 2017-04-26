import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PublisherAlbumListComponent } from './publisher-album-list/publisher-album-list.component';
import { PublisherAlbumComponent } from './publisher-album/publisher-album.component';
import { PublisherComponent } from './publisher/publisher.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherAlbumAddSongDialogComponent } from './publisher-album/publisher-album-add-song-dialog/publisher-album-add-song-dialog.component';
import { PublisherAlbumDeleteSongDialogComponent } from './publisher-album/publisher-album-delete-song-dialog/publisher-album-delete-song-dialog.component';
import { PublisherAlbumDeleteAlbumDialogComponent } from './publisher-album/publisher-album-delete-album-dialog/publisher-album-delete-album-dialog.component';
import { PublisherAlbumChangeNameDialogComponent } from './publisher-album/publisher-album-change-name-dialog/publisher-album-change-name-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'publisher', component: PublisherComponent },
      { path: 'publisher/album', component: PublisherAlbumListComponent },
      { path: 'publisher/album/:id', component: PublisherAlbumComponent },
      { path: '', component: PublisherComponent },
    ])
  ],
  entryComponents: [
    PublisherAlbumAddSongDialogComponent,
    PublisherAlbumDeleteAlbumDialogComponent,
    PublisherAlbumDeleteSongDialogComponent,
    PublisherAlbumChangeNameDialogComponent
  ],
  declarations: [
    PublisherComponent,
    PublisherAlbumComponent,
    PublisherAlbumListComponent,
    PublisherAlbumAddSongDialogComponent,
    PublisherAlbumDeleteSongDialogComponent,
    PublisherAlbumDeleteAlbumDialogComponent,
    PublisherAlbumChangeNameDialogComponent,
  ]
})
export class PublisherModule { }
