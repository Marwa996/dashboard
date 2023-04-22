import { Side_interface } from "src/app/shared/models/Side_interface";

export const navbarData: Side_interface[] = [
     {
          routelink: 'Main',
          icon: 'fa-solid fa-house',
          label: 'الرئيسية',
     },
     {
          routelink: 'pricelist',
          icon: 'fa fa-fw fa-cubes',
          label: 'المنتجات',
          items: [
               {
                    routelink: '',
                    icon: 'fa-chart-simple',
                    label: 'الاصناف',
               }, {
                    routelink: 'product',
                    icon: 'fa-fw fa-cubes',
                    label: 'المنتجات',
               }, {
                    routelink: 'actives',
                    icon: 'fa-money-bill-wave',
                    label: 'قائمة الاسعار',
               },
          ]
     },
     {
          routelink: 'GeneralSupervisor',
          icon: 'fa-solid fa-users',
          label: 'المستخدمين',
          items: [
               {
                    routelink: 'GeneralSupervisor',
                    icon: 'fa-solid fa-user',
                    label: 'المراقب العام',
               }, {
                    routelink: 'DirectorMarketing',
                    icon: 'fa-solid fa-user',
                    label: 'مدير التسويق',
               }, {
                    routelink: 'CustomerManager',
                    icon: 'fa-solid fa-user',
                    label: 'مدير العملاء',
               }, {
                    routelink: 'MarketingDelegates',
                    icon: 'fa-solid fa-user',
                    label: 'مناديب التسويق',
               }, {
                    routelink: 'CustomerRepresentatives',
                    icon: 'fa-solid fa-user',
                    label: 'مناديب العملاء',
               }, {
                    routelink: 'SystemUsers',
                    icon: 'fa-solid fa-user',
                    label: 'مستخدمين النظام',
               },
          ]
     },
     {
          routelink: 'Distributors',
          icon: 'fa-solid fa-clipboard-list',
          label: 'قائمة العملاء ',
          items: [
               {
                    routelink: 'Distributors',
                    icon: 'fa-solid fa-user',
                    label: ' الموزعين',
               }, {
                    routelink: 'Merchants',
                    icon: 'fa-solid fa-user',
                    label: ' التجار',
               }, {
                    routelink: 'Technicians',
                    icon: 'fa-solid fa-user',
                    label: ' الفنيين',
               }, {
                    routelink: 'customers',
                    icon: 'fa-solid fa-user',
                    label: ' العملاء',
               }
          ]
     },
     {
          routelink: 'Provinces',
          icon: 'fa-solid fa-earth-asia',
          label: 'المناطق',
          items: [
               {
                    routelink: 'Provinces',
                    icon: 'fa-solid fa-building',
                    label: 'المحافظات',
               }, {
                    routelink: 'Centers',
                    icon: 'fa-solid fa-building',
                    label: 'المراكز',
               }

          ]
     },
     {
          routelink: 'Gifts',
          icon: 'fa-solid fa-gift',
          label: 'الهدايا',
          items: [
               {
                    routelink: 'Gifts',
                    icon: 'fa-solid fa-circle-dot',
                    label: 'الهدايا',
               }, {
                    routelink: 'GiftReports',
                    icon: 'fa-solid fa-circle-dot',
                    label: 'تقارير الهدايا',
               }

          ]
     },
     {
          routelink: 'Requests',
          icon: 'fa-solid fa-truck',
          label: 'الطلبات',
     },
     {
          routelink: 'ClosedRequests',
          icon: 'fa-solid fa-list-check',
          label: 'شكاوي مغلقة ',
     },
     {
          routelink: 'ClosedRequests',
          icon: 'fa-solid fa-house',
          label: 'طلبات مغلقة ',
     },
     {
          routelink: 'Invoices',
          icon: 'fa-solid fa-paste',
          label: 'الفواتير',
     },
     {
          routelink: 'TradersVisits',
          icon: 'fa-solid fa-house-flag',
          label: 'الزيارات',
          items: [
               {
                    routelink: 'TradersVisits',
                    icon: 'fa-circle-dot',
                    label: 'زيارات التجار',
               }, {
                    routelink: 'DistributorsVisits',
                    icon: 'fa-solid fa-circle-dot',
                    label: ' زيارات الموزعين',
               }

          ]
     },
     {
          routelink: 'Coupons',
          icon: 'fa-solid fa-gears',
          label: 'الاعدادات',
          items: [
               {
                    routelink: 'Coupons',
                    icon: 'fa-solid fa-bookmark',
                    label: ' الكوبونات',
               }, {
                    routelink: 'TradersRating',
                    icon: 'fa-solid fa-bookmark',
                    label: 'تصنيف التجار',
               }, {
                    routelink: 'DistributorsRating',
                    icon: 'fa-solid fa-bookmark',
                    label: 'تصنيف الموزعين',
               }, {
                    routelink: 'TypesVisits',
                    icon: 'fa-solid fa-bookmark',
                    label: 'انواع الزيارات',
               }, {
                    routelink: 'CustomerRepresentatives',
                    icon: 'fa-solid fa-bookmark',
                    label: 'العروض والمسابقات',
               }, {
                    routelink: 'CompanyPriceLists',
                    icon: 'fa-solid fa-bookmark',
                    label: 'قوائم اسعار الشركات',
               },
          ]
     }, {
          routelink: 'NewTechnicians',
          icon: 'fa-solid fa-file',
          label: 'التقارير',
          items: [
               {
                    routelink: 'NewTechnicians',
                    icon: 'fa-solid fa-house-flag',
                    label: 'تقرير الفنيين الجدد',
               }, {
                    routelink: 'DiscontinuedTechnicians',
                    icon: 'fa-solid fa-house-flag',
                    label: ' تقرير الفنيين المتوقفين',
               },
               {
                    routelink: 'NewTraders',
                    icon: 'fa-solid fa-house-flag',
                    label: 'تقرير التجار الجدد',
               }, {
                    routelink: 'DiscontinuedMerchants',
                    icon: 'fa-solid fa-house-flag',
                    label: ' تقرير التجار المتوقفين',
               }

          ]
     },

]; 