import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
