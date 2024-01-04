import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input() data!: ProductData;
  @Output() updateCartEvent = new EventEmitter<any>();

  onIncrement() {
    this.data.qtn++;
  }

  onDecrement() {
    if (this.data.qtn > 1) {
      this.data.qtn--;
    }
  }
  isaddedToCart: boolean = false;
  onAddToCart() {
    this.isaddedToCart = !this.isaddedToCart;
    let payload = {
      addTocart: this.isaddedToCart,
      product: this.data,
    };
    this.updateCartEvent.emit(payload);
  }
}
