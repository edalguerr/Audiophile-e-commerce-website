import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedProductComponent } from './detailed-product.component';

const routes: Routes = [
  {path:"", component: DetailedProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailedProductRoutingModule { }
