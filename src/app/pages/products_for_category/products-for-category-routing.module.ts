import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsForCategoryComponent } from './products-for-category.component';

const routes: Routes = [
  {path:"", component: ProductsForCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsForCategoryRoutingModule { }
