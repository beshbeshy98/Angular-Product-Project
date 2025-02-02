import { CartCounterService } from './../services/cart-counter.service';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItemCount : number = 0;

  constructor(private CartCounterService : CartCounterService){}

  ngOnInit(){
    this.CartCounterService.getCounter().subscribe((res) => this.cartItemCount = res)
  }
}
