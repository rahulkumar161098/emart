import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { CommanService } from 'src/app/commanService/comman.service';
import { error } from 'jquery';
import { Route, Router } from '@angular/router'
import { ToastNotificationsService } from '../../../vender-dashboard/toast-notifications.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private cService: CommanService,
    public dialogRef: MatDialogRef<SignInComponent>,
    private route: Router,
    private toastService: ToastNotificationsService,


  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  userLogin() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.cService.loginApi(username, password).subscribe((res: any) => {
      if (res.status == 200) {
        if (res.user.user_type === 'vender') {
          localStorage.setItem('user', JSON.stringify({email: res.user.email, username: res.user.username}))
          this.route.navigateByUrl('dashboard')
          this.loginForm.reset()
          this.toastService.showSuccess('Logged in', 5000)
        }
        else {
          localStorage.setItem('user', JSON.stringify({email: res.user.email, username: res.user.username}))
          this.route.navigateByUrl('/')
          this.loginForm.reset()
          this.toastService.showSuccess('Logged in', 5000)
        }
      }
    },
      err => {
        const error = err.error.non_field_errors
        this.toastService.showError(error, 5000)

      }
    )
  }

}
