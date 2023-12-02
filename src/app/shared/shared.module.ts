import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { GoBackComponent } from './components/go-back/go-back.component';


@NgModule({
  declarations: [
    GoBackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GoBackComponent
  ]
})
export class SharedModule { }
