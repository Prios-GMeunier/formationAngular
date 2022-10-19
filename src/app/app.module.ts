import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotoComponent } from './toto/toto.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, TotoComponent, MenuComponent, ProductComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
