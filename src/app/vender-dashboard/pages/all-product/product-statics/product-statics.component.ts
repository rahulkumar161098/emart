import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-product-statics',
  templateUrl: './product-statics.component.html',
  styleUrls: ['./product-statics.component.scss']
})
export class ProductStaticsComponent implements OnInit {

  pageHeadingText: string= 'Product Statics'
  public chartOptions: AgChartOptions;

  constructor() {
    this.chartOptions = {
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan',  iceCreamSales: 1 },
        { month: 'Mar', iceCreamSales: 3 },
        { month: 'May',  iceCreamSales: 0 },
        { month: 'Jul', iceCreamSales: 2 },
        { month: 'Sep', iceCreamSales: 1 },
        { month: 'Nov', iceCreamSales: 3 },
      ],
      // Series: Defines which chart type and data to use
      series: [{ type: 'line', xKey: 'month', yKey: 'iceCreamSales' }]
    };
   }

  ngOnInit(): void {
    
  }

}
