import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product.type';

@Pipe({
  name: 'productSorter'
})
export class ProductSorterPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    return products.sort((a,b) => {
      if(a.title > b.title) return -1;
      if(b.title < b.title) return 1;
      return 0;
    });
  }

}
