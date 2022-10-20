import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotoComponent } from './toto/toto.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { BasketService } from './basket/basket.service';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { ProductSorterPipe } from './product-sorter.pipe';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, TotoComponent, MenuComponent, ProductComponent, ProductSorterPipe],
  imports: [BrowserModule],
  providers: [ProductService,BasketService,{provide: LOCALE_ID, useValue: navigator.language}],
  bootstrap: [AppComponent],
})
export class AppModule {}
