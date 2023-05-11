import { Injectable } from '@angular/core';
export interface Product_Schemas {
  
      name_Product:string,
      Base_price:number,
      Coupon_price:number,
      points:number,
      Coupon_type:string,
}
export interface Categories_Schemas {
      name_Categories:string,
      Products:Product_Schemas[]
}



@Injectable({
  providedIn: 'root'
})
export class ProductsPricesService {

Categories:Categories_Schemas[]=[
  {name_Categories:'رمادي بجوان',
   Products:[
    {name_Product:'كوع 20مم',
      Base_price:4.35,
      Coupon_price:2,
      points:3,
      Coupon_type:'كوبون'
    },
      {name_Product:'كوع25مم',
      Base_price:6.0,
      Coupon_price:1.50,
      points:1,
      Coupon_type:'كوبون'
    },
   ]
},
  {name_Categories:'قطع بولي بسن نحاس',
   Products:[
    {name_Product:'كوع 20مم',
      Base_price:4.35,
      Coupon_price:2,
      points:3,
      Coupon_type:'كوبون'
    },
      {name_Product:'كوع25مم',
      Base_price:6.0,
      Coupon_price:1.50,
      points:1,
      Coupon_type:'كوبون'
    },
   ]
},
  {name_Categories:'قطع بولي لحام ',
   Products:[
    {name_Product:'كوع 20مم',
      Base_price:4.35,
      Coupon_price:2,
      points:3,
      Coupon_type:'كوبون'
    },
      {name_Product:'كوع25مم',
      Base_price:6.0,
      Coupon_price:1.50,
      points:1,
      Coupon_type:'كوبون'
    },
   ]
}
]

  constructor() { }



}
