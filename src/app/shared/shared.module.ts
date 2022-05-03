import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgsRevealModule} from 'ngx-scrollreveal';

import { ButtonLinkComponent } from './components/buttons/button-link/button-link.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { MissionComponent } from './components/mission/mission.component';
import { FullProductCardComponent } from './components/full-product-card/full-product-card.component';



@NgModule({
  declarations: [
    ButtonLinkComponent,
    CategoryNavComponent,
    MissionComponent,
    FullProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgsRevealModule
  ],
  exports: [
    ButtonLinkComponent,
    CategoryNavComponent,
    MissionComponent,
    FullProductCardComponent
  ]
})
export class SharedModule { }
