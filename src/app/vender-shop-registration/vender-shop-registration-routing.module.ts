import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopIndexComponent } from './component/shop-index/shop-index.component';
import { RegisterComponent } from './component/register/register.component';
import { ShopRegisterComponent } from './component/shop-register/shop-register.component';
import { CongrateComponent } from './component/congrate/congrate.component';

const routes: Routes = [
  { path: '', component: ShopIndexComponent, children:[
    { path: '', redirectTo:'vender-register', pathMatch: 'full' },
    { path: 'vender-register', component: RegisterComponent },
    { path: 'shop-register', component: ShopRegisterComponent},
    { path: 'congrate', component: CongrateComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenderShopRegistrationRoutingModule { }
