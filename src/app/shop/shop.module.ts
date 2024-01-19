import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { ShopRoutingModule } from './shop-routing.module';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ShopComponent } from './component/shop/shop.component';
import { ShopNavComponent } from './component/shop-nav/shop-nav.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
// import { ShopNavComponent } from './component/shop-nav/shop-nav.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    IndexPageComponent,
    ShopComponent,
    ShopNavComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class ShopModule { }
