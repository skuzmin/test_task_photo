import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable()
export class PhotosService {
  constructor(private http: HttpClient) { }

  getPhotos(): Observable<object> {
    return this.http.get('https://api.thecatapi.com/v1/images/search?limit=12').pipe(take(1));
  }

}