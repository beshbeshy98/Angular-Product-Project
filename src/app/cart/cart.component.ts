import { CartCounterService } from './../services/cart-counter.service';
import { Component } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[] = [];
  counter: number = 0;
  totalPrice: number = 0; 

  constructor(
    private CartCounterService: CartCounterService,
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.CartCounterService.getCartItems();
    this.counter = this.cartItems.length;

    for (let item of this.cartItems) {
      item.counter = 1;
    }
  }

  removeItem(item: Product) {
    this.CartCounterService.removeItemFromCart(item);
    this.loadCart();
  }

  increaseCounter(item: Product) {
    if (item.counter < item.stock) {
      item.counter++;
      this.calculateTotalPrice(); 
    }
  }

  decreaseCounter(item: Product) {
    if (item.counter && item.counter > 1) {
      item.counter--;
      this.calculateTotalPrice(); 
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      return total + item.price * item.counter;
    }, 0);
  }
}
