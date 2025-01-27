import { Component } from '@angular/core';
import productsData from '../../products.json';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../types/product'

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  
  products : Array<Product> = productsData.products; 
}
