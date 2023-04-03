import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainPage/navbar/navbar.component';
import { SidebarComponent } from './mainPage/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PriceListComponent } from './product/price-list/price-list.component';
import { ProductsComponent } from './product/products/products.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { MainBodyComponent } from './layout/main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    MainPageComponent,
    PriceListComponent,
    ProductsComponent,
    TestComponent,
    MainlayoutComponent,
  
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
