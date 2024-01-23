import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastNotificationsService } from '../../../vender-dashboard/toast-notifications.service';
import { ShopService } from '../../service/shop.service'

@Component({
  selector: 'app-shop-register',
  templateUrl: './shop-register.component.html',
  styleUrls: ['./shop-register.component.scss']
})
export class ShopRegisterComponent implements OnInit {

  shopFormValue: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private shopService: ShopService,
    public toastService: ToastNotificationsService,
    
  ) { }

  shopDetailSubmit() {
    if (this.shopFormValue.valid) {
      const shopDetails= this.shopFormValue.value;
      this.shopService.getShopCreateApi('vender-api/shop_details/', shopDetails).subscribe((res)=>{
        console.log(res);
        
        this.router.navigateByUrl('vender-shop-register/congrate')
      this.toastService.showSuccess('shop', 5000)
      })

    }
    else {
      this.toastService.showError('Something went wromg, Please try again!', 5000)
    }

  }

  ngOnInit(): void {

    this.shopFormValue = this.fb.group({
      shop_name: [''],
      shop_gst: [''],
      local_address: [''],
      dist: [''],
      state: [''],
      pin_code: [''],
      email: ['']
    })
  }

}
