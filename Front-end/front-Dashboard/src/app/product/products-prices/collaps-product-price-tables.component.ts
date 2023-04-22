import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
     selector: 'app-collaps-product-price-tables',
     template: `
   <div class="table-responsive">
     <table class="table table-striped table-bordered" *ngFor="let data of Datatebal">

          <thead>
               <tr >
                    <th class=" text-center fw-bold" *ngIf="data.headtabel.Data1">{{data.headtabel.Data1}}</th>
                    <th class=" text-center fw-bold" *ngIf="data.headtabel.Data2">{{data.headtabel.Data2}}</th>
                    <th class=" text-center fw-bold" *ngIf="data.headtabel.Data3">{{data.headtabel.Data3}} </th>
                    <th class=" text-center fw-bold" *ngIf="data.headtabel.Data4">{{data.headtabel.Data4}}</th>
                    <th class=" text-center fw-bold" *ngIf="data.headtabel.Data5">{{data.headtabel.Data5}}  </th>

               </tr>
          </thead>
          <tbody>
               <tr class="md" *ngFor="let data of data.bodytabel">
                    <td class="text-center text-dark fw-semibold pt-3"*ngIf="data.Data1"> {{data.Data1}}</td>
                    <td class="text-center text-dark fw-semibold pt-3"*ngIf="data.Data2"> {{data.Data2}} </td>
                    <td class="text-center text-dark fw-semibold pt-3" *ngIf="data.Data3"> {{data.Data3}} </td>
            
                    <td class="text-center text-dark fw-semibold pt-3" *ngIf="data.Data4">{{data.Data4}} </td>
                    
                    <td class="text-dark fw-semibold pt-3" *ngIf="data.Data5">
                         <select class="form-select dropdown-tables-styel " aria-label="Default select example">
                           <option selected class="">{{data.Data5}}</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                         </select>
                    </td>
               </tr>

          </tbody>
          
          </table>
          </div>
  `,
     styleUrls: ['./products-prices.component.css']
})
export class CollapsProductPriceTablesComponent {
     @Input() Datatebal: any;

     @Output() show_data_body: EventEmitter<string>;

     constructor() {
          this.show_data_body = new EventEmitter<string>()
     }

     show() {
          this.show_data_body.emit("Marwa")
     }
}
