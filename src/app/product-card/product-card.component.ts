import { CartCounterService } from './../services/cart-counter.service';
import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem: any;
  counter : number = 0;
  constructor(
    private router: Router,
    private CartCounterService: CartCounterService
  ) {}

  ngOnInit(){
    this.CartCounterService.getCounter().subscribe((res) => this.counter = res);
  }
  handleClick(id: number) {
    this.router.navigate(['/product', id]);
  }
  addToCart(item : Product) {
    this.CartCounterService.addItemToCart(item);
  }
}
