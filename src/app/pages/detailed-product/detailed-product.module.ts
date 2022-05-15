import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedProductRoutingModule } from './detailed-product-routing.module';
import { DetailedProductComponent } from './detailed-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductImagesComponent } from './product-images/product-images.component';



@NgModule({
  declarations: [
    DetailedProductComponent,
    ProductDescriptionComponent,
    ProductImagesComponent
  ],
  imports: [
    CommonModule,
    DetailedProductRoutingModule,
    SharedModule
  ]
})
export class DetailedProductModule { }
