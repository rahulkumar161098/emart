import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  BASE_URL= 'http://127.0.0.1:8000/'

  constructor( private http: HttpClient) { }
  
  csrftoken= 'fsdfsr34efssdgfdtedxvfx'
  loginApi(username: string, password: string){
    // Include CSRF token in the request headers
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'X-CSRFToken': this.csrftoken,
  // };
    return this.http.post(this.BASE_URL+'acount-auth-api/login-api/', {username, password})
  }
}
