import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import productsData from '../../products.json';
import { DiscountPipe } from '../discount.pipe';
@Component({
  selector: 'app-product-details',
  imports: [ DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() id : string = '';

  products : Array<Product> = productsData.products;

  currentProduct : Product | undefined;


  ngOnInit() {
      this.currentProduct = this.products.find((product: Product) => product.id === Number(this.id))
      console.log(this.currentProduct);
      
  }
}


