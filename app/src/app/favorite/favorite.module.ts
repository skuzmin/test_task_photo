import { NgModule } from '@angular/core';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';
import { DetailsComponent } from '../details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [FavoriteRoutingModule, SharedModule],
  exports: [],
  declarations: [FavoriteComponent, DetailsComponent],
  providers: [],
})
export class FavoriteModule { }
