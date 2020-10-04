import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatListModule,
    MatIconModule
    
  ]
})
export class CustomMaterialModule { }