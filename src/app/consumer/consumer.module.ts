import { PlaylistService } from './consumer-playlist/playlist.service';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConsumerPlaylistListComponent } from './consumer-playlist-list/consumer-playlist-list.component';
import { ConsumerPlaylistComponent } from './consumer-playlist/consumer-playlist.component';
import { ConsumerAlbumComponent } from './consumer-album/consumer-album.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerAuthorComponent } from './consumer-author/consumer-author.component';
import { ConsumerPlaylistAddComponent } from './consumer-playlist-list/consumer-playlist-add/consumer-playlist-add.component';
import { CoreModule } from '../core/core.module';
import { AlbumService } from './consumer-album/album.service';
import { AuthorService } from './author.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RouterModule.forChild([
      { path: 'consumer/playlist/:id', component: ConsumerPlaylistComponent },
      { path: 'consumer/playlist', component: ConsumerPlaylistListComponent },
      { path: 'consumer/album/:id', component: ConsumerAlbumComponent },
      { path: 'consumer/author/:id', component: ConsumerAuthorComponent },
      { path: 'consumer', component: ConsumerComponent },
      { path: '', component: ConsumerComponent },
    ])
  ],
  entryComponents: [
    ConsumerPlaylistAddComponent,
  ],
  declarations: [
    ConsumerComponent,
    ConsumerAlbumComponent,
    ConsumerPlaylistComponent,
    ConsumerPlaylistListComponent,
    ConsumerAuthorComponent,
    ConsumerPlaylistAddComponent
  ],
  providers: [
    PlaylistService,
    AlbumService,
    AuthorService
  ]
})
export class ConsumerModule { }
