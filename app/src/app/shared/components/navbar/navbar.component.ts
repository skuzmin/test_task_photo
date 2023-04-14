import { Component, OnInit } from '@angular/core';

import { AppRoutes } from '../../constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public links: Array<{ name: string, route: string }>;

  ngOnInit(): void {
    this.links = [
      { name: 'Photos', route: AppRoutes.Photos },
      { name: 'Favorites', route: AppRoutes.Favorites }
    ];
  }
}
