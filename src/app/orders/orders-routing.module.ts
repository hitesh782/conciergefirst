import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

const routes: Routes = [
  {
    path: '', component: OrdersListComponent, pathMatch: 'full'
    // children: [
    //   {
    //     path: 'create-order',
    //     component: OrderFormComponent
    //   }
    // ]
  },
  {
    path: 'create-order', component: OrderFormComponent
  },
  {
    path: 'order-details', component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
