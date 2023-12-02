import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from '../orders/components/orders-list/orders-list.component';
import { OrdersModule } from '../orders/orders.module';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
