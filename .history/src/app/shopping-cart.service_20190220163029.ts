import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

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

  private getOrCreateCart() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.create().then(result => {
        localStorage.setItem('cartId', result.key);
        return this.getCart(result.key);
      });
    } else {
      return this.getCart(cartId);
    }
  }

}
