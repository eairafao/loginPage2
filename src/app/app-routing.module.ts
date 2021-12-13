import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'painel',
    component: PainelComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
