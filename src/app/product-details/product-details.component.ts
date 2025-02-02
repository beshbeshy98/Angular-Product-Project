import { ProductRequestService } from './../services/product-request.service';
import { Component, Input } from '@angular/core';
import { Product } from '../types/product';
import { DiscountPipe } from '../discount.pipe';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  imports: [DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() id: string = '';

  products: any;

  currentProduct: Product | undefined;

  constructor(
    private ProductRequestService: ProductRequestService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.currentProduct = this.products.find(
    //   (product: Product) => product.id === Number(this.id)
    // );
    // console.log(this.currentProduct);

    this.activatedRoute.params.subscribe((params) => {
      const params_id = params['id'];
      this.ProductRequestService.getProductDetails(params_id).subscribe((res : any) => this.currentProduct = res)
    });
  }
}
