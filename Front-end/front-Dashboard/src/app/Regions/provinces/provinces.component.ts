import { Component, Input, OnInit } from '@angular/core';
import { Data_Tebal } from '../../shared/models/Data_Tebal';
@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit {
  @Input() data: any;
  Datatebal3: Data_Tebal[] = [{
    headtabel: {},
    bodytabel: []
  }]

  y = {
    Data1: "#",
    Data2: "اسم المنتج	",
    Data3: "اسم الصنف	",
    Data4: " الحالة	",
    Data5: "تم بواسطة	",
    Data6: "تاريخ الانشاء",
    Data7: "خيارات"
  }

  x = [{
    Data1: "1",
    Data2: "أفيز 1000 مم	",
    Data3: "قطع بولي لحام",
    Data4: "فعال",
    Data5: "HESHAM SABRY",
    Data6: "4/8/2029",
  },

  {
    Data1: "2",
    Data2: "إبرا 1600 مم	",
    Data3: "قطع  بولي",
    Data4: "غير فعال",
    Data5: "HESHAM SABRY",
    Data6: "4/8/2029",
  }]


  ngOnInit(): void {
    this.Datatebal3[0].headtabel = this.y;
    this.Datatebal3[0].bodytabel = this.x;
  }
}
