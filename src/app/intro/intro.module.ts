import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { IntroRoutingModule } from './intro-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    IntroRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [IntroComponent]
})
export class IntroModule { }
