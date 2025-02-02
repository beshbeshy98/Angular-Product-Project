import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductRequestService } from '../services/product-request.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products: any;
  constructor(private ProductRequestService: ProductRequestService) {}

  ngOnInit() {
    this.ProductRequestService.getAllProducts().subscribe(
      (res: any) => (this.products = res.products)
    );
  }
}
