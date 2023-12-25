import { Component, Input } from '@angular/core';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() data!: ProductData;

  onIncrement() {
    this.data.qtn++;
  }

  onDecrement() {
    if (this.data.qtn > 1) {
      this.data.qtn--;
    }
  }

  onAddToCart() {}
}
