import { ShoppingCartItem } from './shopping-cart-items';

export class  ShoppingCart {

    constructor(public items: { [key: string]: ShoppingCartItem} ) {}

    get totalItemsCount() {
      let count = 0;
      for (let productId in this.items)
        count += this.items[productId].quanity;
      return count;
    }
}