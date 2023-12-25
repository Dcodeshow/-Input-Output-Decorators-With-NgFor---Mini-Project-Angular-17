import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductData } from './product-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data: ProductData[] = [
    {
      name: 'Laptop',
      qtn: 1,
      price: 100,
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/g/t/z14-pro-z14-pro-i-kall-original-imagupg9jadt3bzy.jpeg?q=70',
    },
    {
      name: 'Mobile',
      qtn: 2,
      price: 500,
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/z/i/-original-imagg5y3qpz8zzzt.jpeg?q=70',
    },
    {
      name: 'Tab',
      qtn: 3,
      price: 200,
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70',
    },
  ];
}
