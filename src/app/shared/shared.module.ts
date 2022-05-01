import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgsRevealModule} from 'ngx-scrollreveal';

import { ButtonLinkComponent } from './components/buttons/button-link/button-link.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { MissionComponent } from './components/mission/mission.component';



@NgModule({
  declarations: [
    ButtonLinkComponent,
    CategoryNavComponent,
    MissionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgsRevealModule
  ],
  exports: [
    ButtonLinkComponent,
    CategoryNavComponent,
    MissionComponent
  ]
})
export class SharedModule { }
