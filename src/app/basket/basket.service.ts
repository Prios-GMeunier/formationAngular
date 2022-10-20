import { Injectable } from '@angular/core';
import { Product } from '../product/product.type';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: Product[] = [];

  getBasket() {
    return this.basket;
  }

  addProduct(product: Product) {
    this.basket.push(product);
  }

  getTotal(): number {
    let price = 0;
    this.basket.forEach((product) => {
      price += product.price;
    });
    return price;
  }
}
