import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Category {
  value: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  selectedValue: string;
  // productForm: FormGroup

  p_category:any= [];

  constructor( private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  pageHeadingText: string= 'Add Product'
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  productForm= this.fb.group({
    title: FormControl['rewrwe'],
    description: FormControl['rwerwer'],
    selling_price: FormControl['werwer'],
    market_price: FormControl['rwerwe'],
    available: FormControl['rwerwe'],
    product_unit: FormControl['rwerwe'],
    category: FormControl['rewrwe'],
    email: FormControl['rwerwe'],

  })

  addNewProduct(){
    console.log(this.productForm.value);
    
  }

  getCategory(){
    this.http.get('http://localhost:8000/vender-api/category/').subscribe(res=>(
      this.p_category= res
      // console.log(res)
      
    ))
  }

  ngOnInit(): void {
    this.getCategory()
  }

}
