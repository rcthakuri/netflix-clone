import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule
  ],
  exports: [
    MaterialModule,
    MatIconModule
  ]
})
export class SharedModule { }
