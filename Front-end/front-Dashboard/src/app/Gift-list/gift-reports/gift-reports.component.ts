import { Component, OnInit } from '@angular/core';
import { Data_Tebal } from 'src/app/shared/models/Data_Tebal';

@Component({
  selector: 'app-gift-reports',
  templateUrl: './gift-reports.component.html',
  styleUrls: ['./gift-reports.component.css']
})
export class GiftReportsComponent implements OnInit {
  Datatebal2: Data_Tebal[] = [{
    headtabel: {},
    bodytabel: []
  }]

  y = {
    Data1: "#",
    Data2: "مروة",
    Data3: "ندى",
    Data4: " ضحى	",
    Data5: "تم بواسطة	",
    Data6: "تاريخ الانشاء",
    Data7: "خيارات",
    Data8:"dddd"
  }

  x = [{
    Data1: "1",
    Data2: "أفيز 50 مم	",
    Data3: "قطع بولي لحام",
    Data4: "فعال",
    Data5: "HESHAM SABRY",
    Data6: "30/12/2020",
    Data7: "DDDDD",
    Box: 'show_data()'
  },

  {
    Data1: "2",
    Data2: "إبرا 60 مم	",
    Data3: "قطع  بولي",
    Data4: "غير فعال",
    Data5: "HESHAM SABRY",
    Data6: "4/7/2023",
    Box: "show_data2()"
  }]

  ngOnInit(): void {
    this.Datatebal2[0].headtabel = this.y;
    this.Datatebal2[0].bodytabel = this.x;  
  }



  show_data_gift(id:string) {
    console.log(id+"Doha")
  }



 show_data3() {

    console.log(this.Datatebal2[0].bodytabel[1].Box)
  }

}
