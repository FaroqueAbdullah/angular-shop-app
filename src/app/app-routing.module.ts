import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    component: HomeComponent,
  },
  {
    path: 'cart',
    // loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    component: CartDetailsComponent,
  },
  {
    path: 'product/:product_id',
    // loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
