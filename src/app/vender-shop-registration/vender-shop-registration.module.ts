import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { VenderShopRegistrationRoutingModule } from './vender-shop-registration-routing.module';
import { ShopIndexComponent } from './component/shop-index/shop-index.component';
import { RegisterComponent } from './component/register/register.component';
import { ShopRegisterComponent } from './component/shop-register/shop-register.component';
import { CongrateComponent } from './component/congrate/congrate.component';


@NgModule({
  declarations: [
    ShopIndexComponent,
    RegisterComponent,
    ShopRegisterComponent,
    CongrateComponent
  ],
  imports: [
    CommonModule,
    VenderShopRegistrationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class VenderShopRegistrationModule { }
