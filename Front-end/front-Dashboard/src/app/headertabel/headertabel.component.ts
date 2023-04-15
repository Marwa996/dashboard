import { Component, OnInit } from '@angular/core';
import { Data_Tebal } from '../shared/models/Data_Tebal';


@Component({
  selector: 'app-headertabel',
  templateUrl: './headertabel.component.html',
  styleUrls: ['./headertabel.component.css']
})
export class HeadertabelComponent implements OnInit {


  Datatebal: Data_Tebal []=[ { 
    headtabel: { }, 
    bodytabel: [] 
  }]


y = {
    Data1: "#",
    Data2: "اسم المنتج	",
    Data3: "اسم الصنف	",
    Data4: " الحالة	",
    Data5: "تم بواسطة	",
    Data6: "تاريخ الانشاء",
    Data7: "خيارات",
    
  }

 x = [{
  Data1: "1",
  Data2: "أفيز 20 مم	",
  Data3: "قطع بولي لحام",
   Data4: "فعال",
  Data5: "HESHAM SABRY",
  Data6: "30/12/2020",
  Box: "show_data()"
},

{
  Data1: "2",
  Data2: "إبرا 30 مم	",
  Data3: "قطع  لحام",
  Data4: "فعال",
  Data5: "HESHAM SABRY",
  Data6: "30/11/2021", 
}]

show_data(){
  
  console.log(this.Datatebal[0].bodytabel[0].Data1)
}

  ngOnInit(): void {
    this.Datatebal[0].headtabel = this.y;
    this.Datatebal[0].bodytabel = this.x;
  }

}
