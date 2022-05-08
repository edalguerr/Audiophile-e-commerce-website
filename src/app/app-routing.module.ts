import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path:":category", loadChildren: () => import('./pages/products_for_category/products-for-category.module').then(m => m.ProductsForCategoryModule)},
  {path:":category/:product", loadChildren: () => import('./pages/detailed-product/detailed-product.module').then(m => m.DetailedProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }