import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShellRoutingModule
  ],
  declarations: [ShellComponent, NavbarComponent]
})
export class ShellModule { }

