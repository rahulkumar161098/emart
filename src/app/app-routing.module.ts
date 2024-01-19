import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { VenderDashboardModule } from './vender-dashboard/vender-dashboard.module';

const routes: Routes = [
  {path: 'dashboard', loadChildren:()=> import('./vender-dashboard/vender-dashboard.module').then(m=>(m.VenderDashboardModule))},
  {path: '', loadChildren:()=> import('./shop/shop.module').then(m=>(m.ShopModule))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
