import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenderShopRegistrationRoutingModule } from './vender-shop-registration-routing.module';
import { ShopIndexComponent } from './component/shop-index/shop-index.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ShopRegisterComponent } from './component/shop-register/shop-register.component';


@NgModule({
  declarations: [
    ShopIndexComponent,
    LoginComponent,
    RegisterComponent,
    ShopRegisterComponent
  ],
  imports: [
    CommonModule,
    VenderShopRegistrationRoutingModule
  ]
})
export class VenderShopRegistrationModule { }
