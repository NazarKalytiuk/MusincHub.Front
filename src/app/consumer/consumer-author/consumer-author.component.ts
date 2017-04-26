import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Author } from '../../core/models/author';
import { Album } from '../../core/models/album';
import { AlbumService } from '../consumer-album/album.service';

@Component({
  selector: 'consumer-author',
  templateUrl: './consumer-author.component.html',
  styleUrls: ['./consumer-author.component.scss']
})
export class ConsumerAuthorComponent implements OnInit {

  author: Author;
  albums: Array<Album>
  constructor(private baseService: BaseService, private authorService: AuthorService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .forEach((params: Params) => {
        this.authorService.getAuthor(params['id']).subscribe(c => this.author = c);
        this.authorService.getAlbums(params['id']).subscribe(c => this.albums = c);
      });
  }

}
