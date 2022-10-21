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

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent, ProductSorterPipe, HomeComponent],
  imports: [BrowserModule,HttpClientModule,AppRoutingModule],
  providers: [ProductService,BasketService,{provide: LOCALE_ID, useValue: navigator.language}],
  bootstrap: [AppComponent],
})
export class AppModule {}
