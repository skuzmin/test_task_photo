import { Component, OnInit } from '@angular/core';

import { FavoriteService } from './services';
import { Photo } from '../shared/models';
import { Router } from '@angular/router';
import { AppRoutes } from '../shared/constants';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  public photos: Array<Photo>;
  constructor(private favoriteService: FavoriteService, private router: Router) { }

  ngOnInit(): void {
    this.photos = this.favoriteService.getPhotos();
  }

  goToPhoto(photo: Photo): void {
    this.router.navigate([AppRoutes.Details, photo.id]);
  }
}
