import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Product } from '../product/product.type';

@Injectable({
  providedIn: 'root',
})
export class BasketService {

  constructor(private httpClient: HttpClient) { }
  
  basket$ = new BehaviorSubject<Product[]>([]);

  total$ = this.basket$.pipe(map((basket) => basket.reduce((total, product) => total + product.price, 0)));

  getBasket(): Observable<Product[]> {
    //return this.basket$;
    return this.httpClient.get<Product[]>('http://localhost:8080/rest/basket').pipe(tap((basket) => this.basket$.next(basket)));
  }

  addProduct(product: Product) {
    //this.basket$.push(product);
    return this.httpClient.post<Product>('http://localhost:8080/rest/basket', product).pipe(tap(() => this.addLocalProduct(product)));
  }

  private addLocalProduct(product: Product) {
    this.basket$.next([...this.basket$.value, product]);
  }
  
  /*getTotal(): number {
    let price = 0;
    this.basket$.forEach((product) => {
      price += product.price;
    });
    return price;
  }*/
/*
  getTotal(): number {
    return this.products.reduce((previous, next) => previous + next.price, 0);
  }*/

}
