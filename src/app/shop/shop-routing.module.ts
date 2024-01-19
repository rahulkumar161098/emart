import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './component/shop/shop.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

const routes: Routes = [
  { path: '', component: ShopComponent, children:[
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: IndexPageComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
