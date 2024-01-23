import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ToastNotificationsService } from '../../../vender-dashboard/toast-notifications.service'
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  venderForm: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public notiService: ToastNotificationsService,
    private shopService: ShopService

  ) { }

  venderReg(){
    if (this.venderForm.valid){
      const data= this.venderForm.value;
      this.shopService.venderLogin('acount-auth-api/user-api/', data).subscribe((res: any)=>{
        if(res.status==201){
          this.router.navigateByUrl('vender-shop-register/shop-register')
        this.notiService.showSuccess('register', 5000)
        }
        else{
          this.notiService.showError('Something went wrong! Please try again',5000)
        }
      })
    }
    else{
      this.notiService.showError('Something went wrong! Please try again',5000)
    }
    
  }

  ngOnInit(): void {
    this.venderForm= this.fb.group({
      first_name: [''],
      last_name: [''],
      username: [''],
      email: [''],
      password: ['']
    })
  }

}
