
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!: Product;

  @Output() addToBasket = new EventEmitter<Product>();

  protected onAddToBasket() {
    this.addToBasket.emit(this.product);
  }

}
