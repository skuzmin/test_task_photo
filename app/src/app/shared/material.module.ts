import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const COMPONENTS = [
  MatSnackBarModule
]

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS
})
export class MaterialModule { }
