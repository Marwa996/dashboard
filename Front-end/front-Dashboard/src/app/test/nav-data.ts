export const navbarData=[
     {
          routelink:'Main',
          icon:'fa-solid fa-house',
          label:'الرئيسية',
     },
     {
          icon: 'fa fa-fw fa-cubes ',
          label: 'المنتجات',
          Options:[
               {},
               {
               1:[{
                    name:'الاصناف',
                    icon:'fa-solid fa-chart-simple',
                    routelink: 'Main',
               }],
               2: [{
                    name: 'المنتجات',
                    icon: 'fa fa-fw fa-cubes',
                    routelink: 'product',
               }],
               3: [{
                    name: 'قائمة الاسعار',
                    icon: 'fa-solid fa-money-bill-wave',
                    routelink: 'pricelist',
               }],

          }
     ]
     }
]; 