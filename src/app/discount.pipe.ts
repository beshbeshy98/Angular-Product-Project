import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number | undefined, discountPercentage?: number): string {
    if (price === undefined) {
      return 'Price not available';
    }

    if (!discountPercentage || discountPercentage <= 0) {
      return `Price: ${price.toFixed(2)}`;
    }

    const discountedPrice = price - (price * discountPercentage) / 100;

    return `
      ${discountedPrice.toFixed(2)}
    `;
  }
}
