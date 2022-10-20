import { Component } from '@angular/core';
import { Product } from './product/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  btnState = true;
  total: number = 0;

  
  

  addToBasketAppComponent(product: Product) {
    this.total += product.price;
    console.log(product.stock);
    product.stock = product.stock - 1;
    console.log(product.stock);
  }

  toggle() {
    console.log('toto');
  }

  handle() {
    console.log('');
  }
}
