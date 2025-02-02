
import { CartCounterService } from './../services/cart-counter.service';
import { Component } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: Product[] = [];
  counter : number = 0;

  constructor(
    private CartCounterService: CartCounterService,
  ) {}

  ngOnInit() {
    this.loadCart();

  }
  loadCart(){
    this.cartItems = this.CartCounterService.getCartItems();
    this.counter = this.cartItems.length;
    for(let item of this.cartItems){
      item.counter = 1;
    }
  }
  removeItem(item : Product){
    this.CartCounterService.removeItemFromCart(item);
    this.loadCart();

  }

  increaseCounter(item: Product) {
    if (item.counter < item.stock) {
      item.counter++;
    }
  }
  
  decreaseCounter(item: Product) {
    if (item.counter && item.counter > 1) {
      item.counter--;
    }
  }
  
}
