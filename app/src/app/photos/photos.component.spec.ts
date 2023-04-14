import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PhotosComponent } from './photos.component';
import { SharedModule } from '../shared/shared.module';
import { PhotosService } from './services';
import { FavoriteService } from '../favorite/services';
import { ToastService } from '../shared/components/toast/toast.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let favoriteService: any;
  let toastService: ToastService;
  let mockEvent: any;

  beforeEach(async () => {
    favoriteService = jasmine.createSpyObj('FavoriteService', ['isPhotoExist', 'savePhoto']);
    toastService = jasmine.createSpyObj('ToastService', ['showNotification']);
    mockEvent = {
      target: {
        scrollingElement: {
          scrollHeight: 1000,
          scrollTop: 500,
          clientHeight: 500
        }
      }
    };
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PhotosComponent],
      providers: [
        {
          provide: PhotosService, useValue: {
            getPhotos: () => of([])
          }
        },
        {
          provide: FavoriteService, useValue: favoriteService
        },
        {
          provide: ToastService, useValue: toastService
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save photo', () => {
    favoriteService.isPhotoExist.and.returnValue(false);
    component.addToFavorites({id: '1', url: '1'});
    expect(favoriteService.savePhoto).toHaveBeenCalled();
    expect(toastService.showNotification).toHaveBeenCalled();
  });

  it('should not save photo', () => {
    favoriteService.isPhotoExist.and.returnValue(true);
    component.addToFavorites({id: '1', url: '1'});
    expect(favoriteService.savePhoto).not.toHaveBeenCalled();
    expect(toastService.showNotification).toHaveBeenCalled();
  });

  it('should call getPhotos() when scrolled to the bottom', () => {
    spyOn(component, 'getPhotos');
    component.isLoading = false;
    component.addMorePhotos(mockEvent);
    expect(component.getPhotos).toHaveBeenCalled();
  });

  it('should not call getPhotos() if already loading', () => {
    spyOn(component, 'getPhotos');
    component.isLoading = true;
    component.addMorePhotos(mockEvent);
    expect(component.getPhotos).not.toHaveBeenCalled();
  });

  it('should not call getPhotos() if not scrolled to the bottom', () => {
    spyOn(component, 'getPhotos');
    mockEvent.target.scrollingElement.scrollTop = 100;
    component.addMorePhotos(mockEvent);
    expect(component.getPhotos).not.toHaveBeenCalled();
  });
});
