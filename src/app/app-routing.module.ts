import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: "", loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    {path:":category", loadChildren: () => import('./pages/products_for_category/products-for-category.module').then(m => m.ProductsForCategoryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }