import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    OrdersListComponent,
    OrderFormComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class OrdersModule { }
