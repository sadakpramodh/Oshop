import { ShoppingCartItem } from './shopping-cart-items';

export class  ShoppingCart {
  items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [productId: string]: ShoppingCartItem} ) {
      for (let productId in itemsMap) {
        let item = itemsMap[productId];
        this.items.push(new ShoppingCartItem(item.product, item.quantity));
      }
    }

    get totalItemsCount() {
      let sum = 0;
      for (let productId in this.items)
        sum += this.items[productId].quantity;
      return sum;
    }
}