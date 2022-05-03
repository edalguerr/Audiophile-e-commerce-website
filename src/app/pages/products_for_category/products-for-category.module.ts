import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsForCategoryRoutingModule } from './products-for-category-routing.module';
import { RouterModule } from '@angular/router';

import { ProductsForCategoryComponent } from './products-for-category.component';
import { NgsRevealModule } from 'ngx-scrollreveal';


@NgModule({
  declarations: [
    ProductsForCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsForCategoryRoutingModule,
    SharedModule,
    RouterModule,
    NgsRevealModule
  ]
})
export class ProductsForCategoryModule { }
