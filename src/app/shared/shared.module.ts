import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [],
  exports: [MaterialModule]
})
export class SharedModule { }
