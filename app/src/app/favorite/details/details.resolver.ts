import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

import { FavoriteService } from '../services';
import { Photo } from 'src/app/shared/models';
import { AppRoutes } from 'src/app/shared/constants';

@Injectable()
export class DetailsResolver implements Resolve<any> {
  constructor(private service: FavoriteService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Photo | Observable<never> {
    const photo = this.service.getPhotoById(route.paramMap.get('id'));
    if (photo) {
      return photo;
    } else {
      this.router.navigate([AppRoutes.Favorites]);
      return EMPTY;
    }
  }
}