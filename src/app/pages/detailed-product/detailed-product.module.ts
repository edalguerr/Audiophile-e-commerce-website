import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedProductRoutingModule } from './detailed-product-routing.module';
import { DetailedProductComponent } from './detailed-product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailedProductComponent
  ],
  imports: [
    CommonModule,
    DetailedProductRoutingModule,
    SharedModule
  ]
})
export class DetailedProductModule { }
