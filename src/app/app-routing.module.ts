import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductListComponent } from './views/product-list/product-list.component';

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent
  },
  {
    path: "products/:productId",
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }