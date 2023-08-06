import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    pathMatch: 'full'
  }
  ,
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule),
    pathMatch: 'full'
  }
  ,
  {
    path: '**',
    redirectTo: 'sale'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
