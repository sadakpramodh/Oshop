import { ShoppingCartItem } from './shopping-cart-items';

export class  ShoppingCart {
  items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [productId: string]: ShoppingCartItem} ) {
      for (let productId in itemsMap)
        this.items.push(itemsMap[productId]);
    }

    get totalItemsCount() {
      let count = 0;
      for (let productId in this.items)
        count += this.items[productId].quanity;
      return count;
    }
}