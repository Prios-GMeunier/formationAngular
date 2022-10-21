import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { BasketService } from './basket/basket.service';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { ProductSorterPipe } from './product-sorter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent, ProductSorterPipe, HomeComponent, BasketComponent, ProductDetailComponent],
  imports: [BrowserModule,HttpClientModule,AppRoutingModule],
  providers: [ProductService,BasketService,{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
