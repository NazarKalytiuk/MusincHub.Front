import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PublisherAlbumListComponent } from './publisher-album-list/publisher-album-list.component';
import { PublisherAlbumComponent } from './publisher-album/publisher-album.component';
import { PublisherComponent } from './publisher/publisher.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherAlbumAddSongDialogComponent } from './publisher-album-add-song-dialog/publisher-album-add-song-dialog.component';
import { PublisherAlbumEditSongDialogComponent } from './publisher-album-edit-song-dialog/publisher-album-edit-song-dialog.component';
import { PublisherAlbumDeleteAlbumDialogComponent } from './publisher-album-delete-album-dialog/publisher-album-delete-album-dialog.component';
import { PublisherAlbumChangeNameDialogComponent } from './publisher-album-change-name-dialog/publisher-album-change-name-dialog.component';

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
    PublisherAlbumEditSongDialogComponent,
  ],
  declarations: [
    PublisherComponent,
    PublisherAlbumComponent,
    PublisherAlbumListComponent,
    PublisherAlbumAddSongDialogComponent,
    PublisherAlbumEditSongDialogComponent,
    PublisherAlbumDeleteAlbumDialogComponent,
    PublisherAlbumChangeNameDialogComponent,
  ]
})
export class PublisherModule { }
