import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConsumerPlaylistListComponent } from './consumer-playlist-list/consumer-playlist-list.component';
import { ConsumerPlaylistComponent } from './consumer-playlist/consumer-playlist.component';
import { ConsumerAlbumComponent } from './consumer-album/consumer-album.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerAuthorComponent } from './consumer-author/consumer-author.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'consumer/playlist/:id', component: ConsumerPlaylistComponent },
      { path: 'consumer/playlist', component: ConsumerPlaylistListComponent },
      { path: 'consumer/album/:id', component: ConsumerAlbumComponent },
      { path: 'consumer/author/:id', component: ConsumerAuthorComponent },
      { path: 'consumer', component: ConsumerComponent },
      { path: '', component: ConsumerComponent },
    ])
  ],
  declarations: [
    ConsumerComponent,
    ConsumerAlbumComponent,
    ConsumerPlaylistComponent,
    ConsumerPlaylistListComponent,
    ConsumerAuthorComponent
  ]
})
export class ConsumerModule { }
