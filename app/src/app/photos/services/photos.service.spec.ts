import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  let service: PhotosService;
  let httpMock: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotosService]
    });
 
    service = TestBed.inject(PhotosService);
    httpMock = TestBed.inject(HttpTestingController);
  });
 
  afterEach(() => {
    httpMock.verify();
  });
 
  it('should retrieve photos from API', () => {
    const mockPhotos = [
      { id: 1, url: 'https://example.com/image1.jpg' },
      { id: 2, url: 'https://example.com/image2.jpg' },
      { id: 3, url: 'https://example.com/image3.jpg' }
    ];
 
    service.getPhotos().pipe(take(1)).subscribe((photos: any) => {
      expect(photos.length).toBe(3);
      expect(photos).toEqual(mockPhotos);
    });
 
    const req = httpMock.expectOne('https://api.thecatapi.com/v1/images/search?limit=12');
    expect(req.request.method).toBe('GET');
    req.flush(mockPhotos);
  });
 
});
