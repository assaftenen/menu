import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';





@NgModule({
  declarations: [OrderComponent],
  exports: [OrderComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    OrderRoutingModule,
    
  ]
})
export class OrderModule { }
