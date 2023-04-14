import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { DetailsComponent } from './details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FavoriteService } from '../services';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { AppRoutes } from 'src/app/shared/constants';
import { ToastTypes } from 'src/app/shared/components/toast/toast.constant';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let matDialog: any;
  let favoriteService: FavoriteService;
  let toastService: ToastService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [DetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: { photo: { id: '1', url: '1' } } }
          }
        },
        { provide: MatDialog, useValue: jasmine.createSpyObj('MatDialog', ['open']) },
        { provide: FavoriteService, useValue: jasmine.createSpyObj('FavoriteService', ['removePhoto']) },
        { provide: ToastService, useValue: jasmine.createSpyObj('ToastService', ['showNotification']) },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    matDialog = TestBed.inject(MatDialog);
    favoriteService = TestBed.inject(FavoriteService);
    toastService = TestBed.inject(ToastService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove photo', fakeAsync(() => {
    const dialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRef.afterClosed.and.returnValue(of(true));
    matDialog.open.and.returnValue(dialogRef);

    component.remove({ id: '1', url: '1' });
    tick();
    expect(toastService.showNotification).toHaveBeenCalledWith(jasmine.objectContaining({ type: ToastTypes.Success }));
    expect(router.navigate).toHaveBeenCalledWith([AppRoutes.Favorites]);
  }));
});
