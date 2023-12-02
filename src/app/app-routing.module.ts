import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { OrdersModule } from './orders/orders.module';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full'
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then((m) => OrdersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
