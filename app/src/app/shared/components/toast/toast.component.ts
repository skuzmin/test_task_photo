import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { ToastTypes, TOAST_TITLES } from './toast.constant';
import { ToastPayload } from './toast.model';

@Component({
  selector: 'fbx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit {
  public type: ToastTypes;
  public title: string;
  public text: string;
  constructor(public snackBarRef: MatSnackBarRef<ToastComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: ToastPayload) { }

  ngOnInit(): void {
    this.type = this.data.type;
    this.title = TOAST_TITLES[this.data.type];
    this.text = this.data.text;
  }
}
