import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    const token= JSON.parse(localStorage.getItem('user'))
    return token
    // const userEmail= token.email
  }
}
