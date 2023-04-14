import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Photo } from 'src/app/shared/models';
import { FavoriteService } from '../services';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { ToastTypes } from 'src/app/shared/components/toast/toast.constant';
import { AppRoutes } from 'src/app/shared/constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public photo: Photo;
  constructor(private activatedRoute: ActivatedRoute,
    private favoriteService: FavoriteService,
    private toastService: ToastService,
    private router: Router) { }

  ngOnInit(): void {
    this.photo = this.activatedRoute.snapshot.data['photo'];
  }

  remove(photo: Photo): void {
    this.favoriteService.removePhoto(photo);
    this.toastService.showNotification({ type: ToastTypes.Success, text: 'Photo has been successfully removed!' });
    this.router.navigate([AppRoutes.Favorites]);
  }
}
