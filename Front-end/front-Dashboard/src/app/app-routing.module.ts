import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { PriceListComponent } from './product/price-list/price-list.component';
import { ProductsComponent } from './product/products/products.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';

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

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
