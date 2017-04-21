import { Observable } from 'rxjs/Rx';
import { RequestOptions } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher-album-add-song-dialog',
  templateUrl: './publisher-album-add-song-dialog.component.html',
  styleUrls: ['./publisher-album-add-song-dialog.component.scss']
})
export class PublisherAlbumAddSongDialogComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  upload(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Authorization', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InN2bGFkYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6InBhc3MxMjMifQ.iJkLoZs_vf275r9WhCH7ILniY9uYazRGSuJVYYoFXas');
      let options = new RequestOptions({ headers: headers });
      this.http.post(`http://localhost:8080/account/register/anus`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => console.log(data),
        error => console.log(error)
        )
    }
  }

}
