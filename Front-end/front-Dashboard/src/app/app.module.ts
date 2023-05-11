import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//start Data Tables
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
//End Data Tables

//start sidenav
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
//End sidenav

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainPage/navbar/navbar.component';
import { SidebarComponent } from './mainPage/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/nav2/test.component';
import { PriceListComponent } from './product/price-list/price-list.component';
import { ProductsComponent } from './product/products/products.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MainBodyComponent } from './layout/main-body/main-body.component';
import { GeneralSupervisorComponent } from './users/general-supervisor/general-supervisor.component';
import { DirectorMarketingComponent } from './users/director-marketing/director-marketing.component';
import { CustomerManagerComponent } from './users/customer-manager/customer-manager.component';
import { MarketingDelegatesComponent } from './users/marketing-delegates/marketing-delegates.component';
import { CustomerRepresentativesComponent } from './users/customer-representatives/customer-representatives.component';
import { SystemUsersComponent } from './users/system-users/system-users.component';
import { DistributorsComponent } from './customer-list/distributors/distributors.component';
import { MerchantsComponent } from './customer-list/merchants/merchants.component';
import { TechniciansComponent } from './customer-list/technicians/technicians.component';
import { CustomersComponent } from './customer-list/customers/customers.component';
import { ProvincesComponent } from './Regions/provinces/provinces.component';
import { CentersComponent } from './Regions/centers/centers.component';
import { GiftsComponent } from './Gift-list/gifts/gifts.component';
import { GiftReportsComponent } from './Gift-list/gift-reports/gift-reports.component';
import { RequestsComponent } from './public-list/requests/requests.component';
import { ClosedComplaintsComponent } from './public-list/closed-complaints/closed-complaints.component';
import { ClosedRequestsComponent } from './public-list/closed-requests/closed-requests.component';
import { InvoicesComponent } from './public-list/invoices/invoices.component';
import { TradersVisitsComponent } from './visits/traders-visits/traders-visits.component';
import { DistributorsVisitsComponent } from './visits/distributors-visits/distributors-visits.component';
import { CouponsComponent } from './Settings/coupons/coupons.component';
import { TradersRatingComponent } from './Settings/traders-rating/traders-rating.component';
import { DistributorsRatingComponent } from './Settings/distributors-rating/distributors-rating.component';
import { TypesVisitsComponent } from './Settings/types-visits/types-visits.component';
import { OffersContestsComponent } from './Settings/offers-contests/offers-contests.component';
import { CompanyPriceListsComponent } from './Settings/company-price-lists/company-price-lists.component';
import { NewTechniciansComponent } from './reports/new-technicians/new-technicians.component';
import { DiscontinuedTechniciansComponent } from './reports/discontinued-technicians/discontinued-technicians.component';
import { NewTradersComponent } from './reports/new-traders/new-traders.component';
import { DiscontinuedMerchantsComponent } from './reports/discontinued-merchants/discontinued-merchants.component';

import { HeadertabelComponent } from './headertabel/headertabel.component';
import { BodytabelComponent } from './bodytabel/bodytabel.component';

import { ProductsPricesComponent } from './product/products-prices/products-prices.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { NewFormComponent } from './test/new-form/new-form.component';
import { MyFormComponent } from './test/new-form/form.component';





@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    MainPageComponent,
    PriceListComponent,
    ProductsComponent,
    MainlayoutComponent,
    TestComponent,
    MainBodyComponent,
    GeneralSupervisorComponent,
    DirectorMarketingComponent,
    CustomerManagerComponent,
    MarketingDelegatesComponent,
    CustomerRepresentativesComponent,
    SystemUsersComponent,
    DistributorsComponent,
    MerchantsComponent,
    TechniciansComponent,
    CustomersComponent,
    ProvincesComponent,
    CentersComponent,
    GiftsComponent,
    GiftReportsComponent,
    RequestsComponent,
    ClosedComplaintsComponent,
    ClosedRequestsComponent,
    InvoicesComponent,
    TradersVisitsComponent,
    DistributorsVisitsComponent,
    CouponsComponent,
    TradersRatingComponent,
    DistributorsRatingComponent,
    TypesVisitsComponent,
    OffersContestsComponent,
    CompanyPriceListsComponent,
    NewTechniciansComponent,
    DiscontinuedTechniciansComponent,
    NewTradersComponent,
    DiscontinuedMerchantsComponent,
    BodytabelComponent,
    HeadertabelComponent,
    ProductsPricesComponent,
    DataTableComponent,
    NewFormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
