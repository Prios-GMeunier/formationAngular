import { firstValueFrom } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const id: string = params['id'];
      // this.product = await firstValueFrom(this.productService.getProduct(id));
    });
  }

}
