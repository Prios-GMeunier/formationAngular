import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotoComponent } from './toto/toto.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { BasketService } from './basket/basket.service';

@NgModule({
  declarations: [AppComponent, TotoComponent, MenuComponent, ProductComponent],
  imports: [BrowserModule],
  providers: [ProductService,BasketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
