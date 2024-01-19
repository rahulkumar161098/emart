import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { CommanService } from 'src/app/commanService/comman.service';
import { error } from 'jquery';

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

    ) {}

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  userLogin(){
    const username= this.loginForm.value.username;
    const password= this.loginForm.value.password;
    this.cService.loginApi(username, password).subscribe((res)=>{
      console.log(res);
      
    },
    // err=>{
    //   console.log(err.message);
      
    // }
    )
    // console.log(this.loginForm.value);
    
  }

}
