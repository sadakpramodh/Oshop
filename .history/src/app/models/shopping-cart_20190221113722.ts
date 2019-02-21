import { ShoppingCartItem } from './shopping-cart-items';

export class  ShoppingCart {
    constructor(public items: ShoppingCartItem[]) {}

    get totalItemsCount() {
      let count = 0;
      for (let productId in cart.items)
        count += cart.items[productId].quanity;
      return count;
    }
}