import { Component, OnInit } from '@angular/core';
import { VenderService } from '../../service/vender.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  shop: any=[]
  pageHeadingText: string ="Your Shop Details"

  constructor( private Vservice: VenderService) { }

  shopDetails(){
    this.shop=this.Vservice.shopSetails    
  }

  ngOnInit(): void {
    this.shopDetails()
  }

}
