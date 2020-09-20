import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { ProductComponent } from './component/product/product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AddToCartButtonComponent } from './component/add-to-cart-button/add-to-cart-button.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { CartPreviewComponent } from './component/cart-preview/cart-preview.component';
import { SubHeaderComponent } from './component/sub-header/sub-header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CartTotalComponent } from './component/cart-total/cart-total.component';
import { CartProductListComponent } from './component/cart-product-list/cart-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ProductComponent,
    ProductListComponent,
    AddToCartButtonComponent,
    CurrencyFormatPipe,
    CartPreviewComponent,
    SubHeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CartTotalComponent,
    CartProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CurrencyFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
