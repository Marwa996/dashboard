import { Component, OnInit } from '@angular/core';
import { Data_Tebal } from 'src/app/shared/models/Data_Tebal';
import{ProductsPricesService} from'../../shared/models/products-prices.service'
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-products-prices',
  templateUrl: './products-prices.component.html',
  styleUrls: ['./products-prices.component.css']
})
export class ProductsPricesComponent implements OnInit {
add_product_collapsed:boolean=false
addProductCollapsed(){
  this.add_product_collapsed=!this.add_product_collapsed
}
ids:string="flush-heading1"

  Datateba_Header = {
    Data1: "اسم المنتج",
    Data2: "السعر الاساسي",
    Data3: "سعر الكوبون",
    Data5: " نوع الكوبون	",
    Data4: " النقاط	",

  }



constructor(private _ProductsPricesService:ProductsPricesService){}
Categories=this._ProductsPricesService.Categories


  ngOnInit(): void {

  }

  addprodectform3!: FormGroup;

addprodectform:FormGroup=new FormGroup({
  name_Product:new FormControl(),
  Base_price:new FormControl(),
  Coupon_price:new FormControl(),
  points:new FormControl(),
  Coupon_type:new FormControl(),
})

addprodectform2:FormGroup=new FormGroup({
  name_Product:new FormControl(),
  Base_price:new FormControl(),
  Coupon_price:new FormControl(),
  points:new FormControl(),
  Coupon_type:new FormControl(),
})


submitFormadd(addprodectform:any ,addprodectform2:any){
  console.log(addprodectform);
  console.log(addprodectform2);
}



//  add_New_Product(){
// let x =document.createElement(`<form class="modalBody" [formGroup]="addprodectform2">
//             <div class="table-responsive">
//               <table class="table table-striped table-bordered">
//                 <tbody>
//                   <tr class="md">
//                     <td class="text-center text-dark fw-semibold pt-3">
//                       <input formControlName="name_Product" type="text" class="form-control" placeholder="اسم المنتج"
//                         aria-label="First name" />
//                     </td>
//                     <td class="text-center text-dark fw-semibold pt-3">
//                       <input formControlName="Base_price" type="text" class="form-control" placeholder="السعر الاساسي"
//                         aria-label="Last name" />
//                     </td>
//                     <td class="text-center text-dark fw-semibold pt-3">
//                       <input formControlName="Coupon_price" type="text" class="form-control" placeholder="سعر الكوبون"
//                         aria-label="Last name" />
//                     </td>

//                     <td class="text-center text-dark fw-semibold pt-3">
//                       <input formControlName="points" type="text" class="form-control" placeholder=" النقاط"
//                         aria-label="Last name" />
//                     </td>
//                     <td class="text-center text-dark fw-semibold pt-3">
//                       <select class="form-select" aria-label="Default select example" formControlName="Coupon_type">
//                         <option selected>نوع الكوبون</option>
//                         <option value="1">One</option>
//                         <option value="2">Two</option>
//                         <option value="3">Three</option>
//                       </select>
//                     </td>

//                     <td class="text-dark fw-semibold pt-3">
//                       <div class="d-flex justify-content-center">
//                         <div class="col-6 text-center">
//                           <i class="fa-sharp fa-solid fa-trash"></i>
//                         </div>
//                       </div>
//                     </td>
//                   </tr>


//                 </tbody>
//               </table>
//             </div>
//           </form>`)
// document.body.appendChild(x)
//   }


  add_New_Product(){
this.addprodectform3=new FormGroup({
  name_Product:new FormControl(),
  Base_price:new FormControl(),
  Coupon_price:new FormControl(),
  points:new FormControl(),
  Coupon_type:new FormControl(),
})
  }

  remove_Product(target:any){
    console.log(target);

  }


 hided_collaps(){
   var x = document.getElementsByClassName("collapse");
for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
 }





}
