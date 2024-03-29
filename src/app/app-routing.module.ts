import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenderDashboardModule } from './vender-dashboard/vender-dashboard.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./vender-dashboard/vender-dashboard.module').then(
        (m) => m.VenderDashboardModule
      ),
  },

  {
    path: 'vender-shop-register',
    loadChildren: () =>
      import('./vender-shop-registration/vender-shop-registration.module').then(
        (m) => m.VenderShopRegistrationModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
