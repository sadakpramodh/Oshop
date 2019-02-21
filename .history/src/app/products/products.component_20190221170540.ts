import { Product } from './../models/products';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]= [];
  filteredProducts: Product[]= [];
  category: string;
  cart: Observable<ShoppingCart>;

  constructor(route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartService: ShoppingCartService) {
    
   }

  async ngOnInit() {
    this.cart$ = (await this.shoppingCartService.getCart();
   }


}
