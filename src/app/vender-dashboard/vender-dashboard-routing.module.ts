import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AllProductComponent } from './pages/all-product/all-product.component';
import { ProductStaticsComponent } from './pages/all-product/product-statics/product-statics.component';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';



const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardPageComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'all-products', component: AllProductComponent },
    { path: 'product-details', component: ProductStaticsComponent },
    { path : 'shop/:email', component: ShopDetailComponent },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenderDashboardRoutingModule { }
