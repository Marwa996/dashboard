import { Component, OnInit } from '@angular/core';
import { Data_Tebal } from 'src/app/shared/models/Data_Tebal';

@Component({
  selector: 'app-products-prices',
  templateUrl: './products-prices.component.html',
  styleUrls: ['./products-prices.component.css']
})
export class ProductsPricesComponent implements OnInit {
  Datatebal2: Data_Tebal[] = [{
    headtabel: {},
    bodytabel: []
  }]

  y = {
    Data1: "اسم المنتج",
    Data2: "السعر الاساسي",
    Data3: "سعر الكوبون",
    Data5: " نوع الكوبون	",
    Data4: " النقاط	",
   
  }

  x = [{
    Data1: "كوع 20مم",
    Data2: " 4.35 	",
    Data3: "0",
    Data5: "كوبون",
    Data4: "0",
   
  },

  {
    Data1: "كوع25مم",
    Data2: "  6.00	",
    Data3: " 1.50",
    Data5: "كوبون",
    Data4: "1",
   
  }]

  ngOnInit(): void {
    this.Datatebal2[0].headtabel = this.y;
    this.Datatebal2[0].bodytabel = this.x;
  }
  
 

}
