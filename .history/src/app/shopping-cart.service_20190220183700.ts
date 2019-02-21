import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/products';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;
   
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
   
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      if (item.$exists()) item$.update({ quantity: item.quantity + 1 });
      else item$.set({ product: product, quantity: 1 });
    });
  }

}