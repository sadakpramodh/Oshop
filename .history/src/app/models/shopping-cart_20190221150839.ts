import { Product } from './../../../project/.history/src/app/models/products_20190220091107';
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
      let count = 0;
      for (let productId in this.items)
        count += this.items[productId].quantity;
      return count;
    }

    get totalPrice() {
      let sum = 0;
      for (let productId in this.items)
        sum += this.items[productId].totalPrice;
      return sum;
    }
    getQuantity(product: Product) {
  
      let item = this.itemsMap[product.$key];
      return item ? item.quantity : 0;
    }
}