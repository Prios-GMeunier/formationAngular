import { Component } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { ProductService } from './product/product.service';
import { Product } from './product/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}) 
export class AppComponent {
  title = 'shop';
  btnState = true;
  
   get total(): number {
    return this.basketService.getTotal();
  }
 
    products = this.productService.getProducts();
   

  basket = this.basketService.getBasket();

  constructor(private productService: ProductService, private basketService: BasketService) {}
   
  

  addToBasketAppComponent(product: Product) {
    this.basketService.addProduct(product);
    this.productService.decreaseStock(product);
  }

  toggle() {
    console.log('toto');
  }

  handle() {
    console.log('');
  }
}
