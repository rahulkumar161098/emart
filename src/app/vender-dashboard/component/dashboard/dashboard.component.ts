import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VenderService } from '../../service/vender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sidenav:boolean = false;
  bodySize:boolean = false;
  headeSize:boolean = false
  sessionUser: any;
  shopEmail: any;

  getSesion(){
    this.sessionUser = localStorage.getItem('user')
    console.log(this.sessionUser);
    
  }

  constructor(
    private Vservice: VenderService, 
    private route: Router
  ) { 
    this.getSesion()
  }

  getShopDetails(){
    const email= JSON.parse( this.sessionUser)
    console.log(email);
    this.shopEmail= email.email
    this.Vservice.getShopDetails('vender-api/shop/',email.email)
  }

  sidenavToggle(event) {
    console.log(event);
    
    this.sidenav =! this.sidenav
    this.bodySize =! this.bodySize
    this.headeSize =! this.headeSize
    console.log(this.bodySize);
    
  }

  // ngAfterViewInit(): void {
  //   document.addEventListener("DOMContentLoaded", function (event) {

  //     const showNavbar = (toggleId, navId, bodyId, headerId) => {
  //       const toggle = document.getElementById(toggleId),
  //         nav = document.getElementById(navId),
  //         bodypd = document.getElementById(bodyId),
  //         headerpd = document.getElementById(headerId)

  //       // Validate that all variables exist
  //       if (toggle && nav && bodypd && headerpd) {
  //         toggle.addEventListener('click', () => {
  //           // show navbar
  //           nav.classList.toggle('show')
  //           // change icon
  //           toggle.classList.toggle('bx-x')
  //           // add padding to body
  //           bodypd.classList.toggle('body-pd')
  //           // add padding to header
  //           headerpd.classList.toggle('body-pd')
  //         })
  //       }
  //     }

  //     showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

  //     /*===== LINK ACTIVE =====*/
  //     const linkColor = document.querySelectorAll('.nav_link')

  //     function colorLink() {
  //       if (linkColor) {
  //         linkColor.forEach(l => l.classList.remove('active'))
  //         this.classList.add('active')
  //       }
  //     }
  //     linkColor.forEach(l => l.addEventListener('click', colorLink))

  //     // Your code to run since DOM is loaded and ready
  //   });
  // }

  ngOnInit(): void {

  }

}
