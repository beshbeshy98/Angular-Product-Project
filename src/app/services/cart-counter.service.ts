import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  private counter = new BehaviorSubject<number>(0);  
  private cartItems : Product[] = [];
  constructor() { }

  getCounter(){
    return this.counter.asObservable();
  }
  
  setCounter(newValue : number){
    return this.counter.next(newValue);
  }

  getCartItems(){
    return this.cartItems;
  }
  addItemToCart(item : Product){
    const exists = this.cartItems.find((product) => product.id == item.id);
    if(!exists){
      this.cartItems.push(item)
    }
    this.setCounter(this.cartItems.length);
    
  }
  removeItemFromCart(item : Product){
    this.cartItems = this.cartItems.filter((product) => product.id !== item.id);
    this.setCounter(this.cartItems.length);
  }

}
