import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AgChartsAngularModule } from 'ag-charts-angular';
import { HttpClientModule } from "@angular/common/http"

import { VenderDashboardRoutingModule } from './vender-dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { VenderHeaderNavComponent } from './component/vender-header-nav/vender-header-nav.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AllProductComponent } from './pages/all-product/all-product.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { PageHeadingComponent } from './component/page-heading/page-heading.component';
import { DelDialogComponent } from './pages/all-product/del-dialog/del-dialog.component';
import { ProductStaticsComponent } from './pages/all-product/product-statics/product-statics.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardComponent,
    VenderHeaderNavComponent,
    AddProductComponent,
    AllProductComponent,
    PageHeadingComponent,
    DelDialogComponent,
    ProductStaticsComponent
  ],
  imports: [
    CommonModule,
    VenderDashboardRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AgChartsAngularModule,
    HttpClientModule,
    
    
  ]
})
export class VenderDashboardModule { }
