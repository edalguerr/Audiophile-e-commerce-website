import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainContainerComponent } from './layout/main-container.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainContainerComponent
  ]
})
export class CoreModule { }
