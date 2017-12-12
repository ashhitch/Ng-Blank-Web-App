import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { ShellModule } from './shell/shell.module';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    loadChildren: './intro/intro.module#IntroModule',
   // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [ShellModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
