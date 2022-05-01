import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonLinkComponent } from './components/buttons/button-link/button-link.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';



@NgModule({
  declarations: [
    ButtonLinkComponent,
    CategoryNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonLinkComponent,
    CategoryNavComponent
  ]
})
export class SharedModule { }
