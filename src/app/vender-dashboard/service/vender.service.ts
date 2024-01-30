import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VenderService {
  BASE_URL='http://localhost:8000/'
  shopSetails: any= []

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  getShopDetails(url: string, email: any){
    this.http.get(this.BASE_URL+url+email).subscribe((res)=>{
      this.shopSetails= res 
      this.route.navigateByUrl('/dashboard/shop/'+email)
      // console.log(this.shopSetails);
      
    })
  }
}
