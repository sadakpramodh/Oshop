import { ShoppingCartItem } from './../../../project/.history/src/app/models/shopping-cart-items_20190221123830';
import { Product } from "./products";

export class ShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;
    constructor(init?: <ShoppingCartItem>) {
        Object.assign(this, init);
    }
    get totalPrice() { return this.price * this.quantity; }
}