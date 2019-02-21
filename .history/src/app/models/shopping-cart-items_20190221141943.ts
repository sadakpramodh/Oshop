import { Product } from "./products";

export class ShoppingCartItem {
    quantity: number;

    constructor(public product: Product) {
        
    }

    get totalPrice() { return this.product.price * this.quantity; }
}