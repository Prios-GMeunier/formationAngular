import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from './product.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  products$ = new BehaviorSubject<Product[]>([]);
  /*
  products: Product[] = [
    {
      title: 'Sweat homme',
      description: '<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
      price: 39,
      stock: 1
    },
    {
      title: 'Tee-Shirt homme',
      description: 'TEE-SHIRT BIO À COL ROND - HOMME',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
      price: 19,
      stock: 2
    },
    {
      title: 'Tee-Shirt femme',
      description: 'TEE-SHIRT BIO À COL ROND - FEMME',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
      price: 19,
      stock: 3
    },
    {
      title: 'Tote bag',
      description: '<C0D1NG_TH3_W0RLD>, TOTE BAG BIO.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
      price: 12.5,
      stock: 4
    },
  ];*/

  getProducts(): Observable<Product[]> {
    //return this.products;
    return this.httpClient.get<Product[]>('http://localhost:8080/rest/products').pipe(tap((products) => this.products$.next(products)));
  }

  isTheLast(product: Product){
    if(product.stock === 1){
      return true;
    }
    return false;
  }

  isAvailable(product: Product){
    if(product.stock > 0){
      return true;
    }
    return false;
  }

  decreaseStock(product: Product){
    product.stock--;
  }
}
