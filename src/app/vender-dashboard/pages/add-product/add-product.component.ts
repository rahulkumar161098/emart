import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  selectedValue: string;
  // productForm: FormGroup

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  constructor( private fb: FormBuilder) { }

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

  ngOnInit(): void {
  }

}
