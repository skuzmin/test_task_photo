import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from './favorite.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteService } from './services';
import { Router } from '@angular/router';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;
  let router: Router;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FavoriteComponent],
      providers: [
        {
          provide: FavoriteService, useValue: {
            getPhotos: () => []
          }
        },
        { provide: Router, useValue: router }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the photo', () => {
    component.goToPhoto({ id: '1', url: '1' });
    expect(router.navigate).toHaveBeenCalled();
  })
});
