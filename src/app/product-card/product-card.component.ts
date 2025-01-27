import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productItem: any;

  constructor(private router: Router){

  }

  handleClick(id: number){
    this.router.navigate(['/product', id]);
    
  }
}
