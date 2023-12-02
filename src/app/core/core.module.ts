import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CoreComponent } from './core.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [


    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    MaterialModule,

    MatButtonModule,
    MatSidenavModule
  ]
})
export class CoreModule { }
