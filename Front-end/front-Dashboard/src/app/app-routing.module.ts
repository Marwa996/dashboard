import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { PriceListComponent } from './product/price-list/price-list.component';
import { ProductsComponent } from './product/products/products.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { CustomersComponent } from './customer-list/customers/customers.component';
import { DistributorsComponent } from './customer-list/distributors/distributors.component';
import { MerchantsComponent } from './customer-list/merchants/merchants.component';
import { TechniciansComponent } from './customer-list/technicians/technicians.component';
import { GiftReportsComponent } from './Gift-list/gift-reports/gift-reports.component';
import { GiftsComponent } from './Gift-list/gifts/gifts.component';
import { ClosedComplaintsComponent } from './public-list/closed-complaints/closed-complaints.component';
import { ClosedRequestsComponent } from './public-list/closed-requests/closed-requests.component';
import { InvoicesComponent } from './public-list/invoices/invoices.component';
import { RequestsComponent } from './public-list/requests/requests.component';
import { CentersComponent } from './Regions/centers/centers.component';
import { ProvincesComponent } from './Regions/provinces/provinces.component';
import { DiscontinuedMerchantsComponent } from './reports/discontinued-merchants/discontinued-merchants.component';
import { DiscontinuedTechniciansComponent } from './reports/discontinued-technicians/discontinued-technicians.component';
import { NewTechniciansComponent } from './reports/new-technicians/new-technicians.component';
import { NewTradersComponent } from './reports/new-traders/new-traders.component';
import { CompanyPriceListsComponent } from './Settings/company-price-lists/company-price-lists.component';
import { CouponsComponent } from './Settings/coupons/coupons.component';
import { DistributorsRatingComponent } from './Settings/distributors-rating/distributors-rating.component';
import { OffersContestsComponent } from './Settings/offers-contests/offers-contests.component';
import { TradersRatingComponent } from './Settings/traders-rating/traders-rating.component';
import { TypesVisitsComponent } from './Settings/types-visits/types-visits.component';
import { CustomerManagerComponent } from './users/customer-manager/customer-manager.component';
import { CustomerRepresentativesComponent } from './users/customer-representatives/customer-representatives.component';
import { DirectorMarketingComponent } from './users/director-marketing/director-marketing.component';
import { GeneralSupervisorComponent } from './users/general-supervisor/general-supervisor.component';
import { MarketingDelegatesComponent } from './users/marketing-delegates/marketing-delegates.component';
import { SystemUsersComponent } from './users/system-users/system-users.component';
import { DistributorsVisitsComponent } from './visits/distributors-visits/distributors-visits.component';
import { TradersVisitsComponent } from './visits/traders-visits/traders-visits.component';

const routes: Routes = [
  // ************************* Login  *****************
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // ................... Main LayOut Children ...............
  {
    path: 'Mainlayout', component: MainlayoutComponent, children: [

      { path: '', redirectTo: 'Main', pathMatch: 'full' },
      { path: 'Main', component: MainPageComponent },
      { path: 'pricelist', component: PriceListComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'Distributors', component: DistributorsComponent },
      { path: 'Merchants', component: MerchantsComponent },
      { path: 'Technicians', component: TechniciansComponent },
      { path: 'GiftReports', component: GiftReportsComponent },
      { path: 'Gifts', component: GiftsComponent },
      { path: 'ClosedComplaints', component: ClosedComplaintsComponent },
      { path: 'ClosedRequests', component: ClosedRequestsComponent },
      { path: 'Invoices', component: InvoicesComponent },
      { path: 'Requests', component: RequestsComponent },
      { path: 'Centers', component: CentersComponent },
      { path: 'Provinces', component: ProvincesComponent },
      { path: 'DiscontinuedMerchants', component: DiscontinuedMerchantsComponent },
      { path: 'DiscontinuedTechnicians', component: DiscontinuedTechniciansComponent },
      { path: 'NewTechnicians', component: NewTechniciansComponent },
      { path: 'NewTraders', component: NewTradersComponent },
      { path: 'CompanyPriceLists', component: CompanyPriceListsComponent },
      { path: 'Coupons', component: CouponsComponent },
      { path: 'DistributorsRating', component: DistributorsRatingComponent },
      { path: 'OffersContests', component: OffersContestsComponent },
      { path: 'TradersRating', component: TradersRatingComponent },
      { path: 'TypesVisits', component: TypesVisitsComponent },
      { path: 'CustomerManager', component: CustomerManagerComponent },
      { path: 'CustomerRepresentatives', component: CustomerRepresentativesComponent },
      { path: 'DirectorMarketing', component: DirectorMarketingComponent },
      { path: 'GeneralSupervisor', component: GeneralSupervisorComponent },
      { path: 'MarketingDelegates', component: MarketingDelegatesComponent },
      { path: 'SystemUsers', component: SystemUsersComponent },
      { path: 'DistributorsVisits', component: DistributorsVisitsComponent },
      { path: 'TradersVisits', component: TradersVisitsComponent },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
