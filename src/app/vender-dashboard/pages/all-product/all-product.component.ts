import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DelDialogComponent } from './del-dialog/del-dialog.component';


@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {

  constructor( public dialog: MatDialog) { }
  pageHeadingText: string= 'All Products'

  openDialog(): void {
    this.dialog.open(DelDialogComponent , {
      width: '400px',
      height: '150px',
      
    });
  }

  ngOnInit(): void {
  }

}
