import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {NgsRevealModule} from 'ngx-scrollreveal';

import { HomeComponent } from './home.component';
import { MainProductsGridComponent } from './components/main-products-grid/main-products-grid.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainProductsGridComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgsRevealModule
  ]
})
export class HomeModule { }
