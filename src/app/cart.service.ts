import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

interface Iproduct {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /*
  获取商品价格
  */
  getShippingPrices() {
    return this.http.get<Iproduct[]>('/assets/shipping.json');
  }
}
