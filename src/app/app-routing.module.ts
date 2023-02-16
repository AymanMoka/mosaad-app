import { OrderResolver } from './resolver/order.resolver';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: 'order/:id',
    component: OrderDetailsComponent,
    resolve: { orders: OrderResolver }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
