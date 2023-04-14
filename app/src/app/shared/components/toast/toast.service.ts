import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ToastComponent } from './toast.component';
import { ToastPayload } from './toast.model';
import { TOAST_DURATION } from './toast.constant';

@Injectable()
export class ToastService {
  constructor(private snackBar: MatSnackBar) { }

  showNotification(payload: ToastPayload): void {
    this.snackBar.openFromComponent(ToastComponent, {
      duration: TOAST_DURATION,
      horizontalPosition: 'right',
      panelClass: 'app-snack-bar',
      data: payload
    })
      .afterDismissed()
      .subscribe();
  }
}
