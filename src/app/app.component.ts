import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { ProductService } from './product/product.service';
import { Product } from './product/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}) 
export class AppComponent implements OnInit{
  title = 'shop';
  btnState = true;
  
   get total(): number {
    //return this.basketService.getTotal();
    return 0;
  }
 
    //products = this.productService.getProducts();
    products!: Product[];

  basket = this.basketService.getBasket();

  constructor(private productService: ProductService, private basketService: BasketService) {}
   
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => (this.products = products));
    this.basketService.getBasket().subscribe();
  }

  /*addToBasketAppComponent(product: Product) {
    this.basketService.addProduct(product);
    this.productService.decreaseStock(product);

    this.basketService.addProduct(event).subscribe(() => this.productService.decreaseStock(event));
  }*/

  
  addToBasketAppComponent(event: any) {
    
    this.basketService.addProduct(event).subscribe(() => this.productService.decreaseStock(event));
  }

  toggle() {
    console.log('toto');
  }

  handle() {
    console.log('');
  }
}
