import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');
    TestBed.configureTestingModule({
      providers: [FavoriteService]
    });
    service = TestBed.inject(FavoriteService);
    service.initPhotos();
  });

  it('should init photos', () => {
    service.initPhotos();
    expect(service.getPhotos()).toEqual([]);
  })

  it('should get photos', () => {
    service.getPhotos();
    expect(service.getPhotos()).toEqual([]);
  });

  it('should save photos', () => {
    const test = { id: '1', url: '1' };
    service.savePhoto(test);
    expect(service.getPhotos().length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should get photo by id', () => {
    const test = { id: 'test', url: 'test' };
    service.savePhoto(test);
    const result = service.getPhotoById('test');
    expect(result).toEqual(test);
  });

  it('should remove photo', () => {
    const test = { id: '1', url: '1' };
    service.savePhoto(test);
    service.removePhoto(test);
    const result = service.getPhotos();
    expect(result).toEqual([]);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should check if photo exists', () => {
    const test = { id: '1', url: '1' };
    service.savePhoto(test)
    const result = service.isPhotoExist({ id: '123', url: '123' });
    expect(result).toBeFalse();
  })
});
