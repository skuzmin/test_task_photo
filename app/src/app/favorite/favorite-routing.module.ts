import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from '../shared/constants';
import { FavoriteComponent } from './favorite.component';
import { DetailsComponent } from './details/details.component';
import { DetailsResolver } from './details/details.resolver';

export const routes: Routes = [
  { path: AppRoutes.Favorites, component: FavoriteComponent },
  {
    path: `${AppRoutes.Details}/:id`, component: DetailsComponent, resolve: {
      photo: DetailsResolver
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
