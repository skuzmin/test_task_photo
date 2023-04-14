import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastTypes } from './toast.constant';
import { of } from 'rxjs';

describe('ToastService', () => {
  let service: ToastService;
  let snackBar: any;

  beforeEach(() => {
    snackBar = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);
    snackBar.openFromComponent.and.returnValue({
      afterDismissed: () => of(true),
      onAction: () => of(true)
    });
    TestBed.configureTestingModule({
      providers: [
        ToastService,
        { provide: MatSnackBar, useValue: snackBar }
      ]
    });
    service = TestBed.inject(ToastService);
  });

  it('should send notification', () => {
    service.showNotification({ type: ToastTypes.Error, text: 'error' });
    expect(snackBar.openFromComponent).toHaveBeenCalled();
  });

});
