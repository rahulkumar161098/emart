import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  productForm : FormGroup

  constructor( 
    private fb: FormBuilder
  ) { }

  prodcutForm= this.fb.group({
    
  })

  ngOnInit(): void {
  }

}
