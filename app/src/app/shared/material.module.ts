import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const COMPONENTS = [
  MatSnackBarModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS
})
export class MaterialModule { }
