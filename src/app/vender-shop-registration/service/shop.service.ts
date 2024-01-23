import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  BASE_URL: string= 'http://localhost:8000/'
  // http://localhost:8000/vender-api/products/

  constructor(
    private http: HttpClient
  ) { }

  venderLogin(url: string, data: any){
    return this.http.post(this.BASE_URL+url, data)
  }

  getShopCreateApi(url: string, data: any){
    return this.http.post(this.BASE_URL+url, data)
  }
}
