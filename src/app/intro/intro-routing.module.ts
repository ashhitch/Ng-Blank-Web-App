import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro.component';
import { NgModule } from '@angular/core';
import { ShellComponent } from '../shell/shell.component';
import { ShellModule } from './../shell/shell.module';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    data: {
      title: 'Intro'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IntroRoutingModule { }
