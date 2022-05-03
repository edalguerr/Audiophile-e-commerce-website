import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainContainerComponent } from './layout/main-container.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NgsRevealModule } from 'ngx-scrollreveal';



@NgModule({
  declarations: [
    NavbarComponent,
    MainContainerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgsRevealModule
  ],
  exports: [
    MainContainerComponent
  ]
})
export class CoreModule { }
