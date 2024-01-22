import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopIndexComponent } from './component/shop-index/shop-index.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', component: ShopIndexComponent, children:[
    { path: '', redirectTo:'vender-register', pathMatch: 'full' },
    { path: 'vender-register', component: RegisterComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenderShopRegistrationRoutingModule { }
