import { ShoppingcartService } from './../shoppingcart.service';
import { async } from '@angular/core/testing';
import { Product } from './../models/product';
import { CategoryService } from './../category.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../products.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  CategoryList$: Observable<any[]>;
  category: string;
  nums = 0;
  firstload = true;
  cartDict = {};

  constructor(
    route: ActivatedRoute,
    private ps: ProductsService,
    private cs: CategoryService,
    private cartService: ShoppingcartService) {

    ps.getAll().subscribe(products => {
    this.products = products;
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
      // console.log(this.products);
      // console.log(this.filteredProducts);
      });
    });
    this.CategoryList$ = cs.getAll();

    // route.queryParamMap
    // 會去找 html 中 [queryParams]="{ category: c.$key }" 的 category
    this.cartDict = this.cartService.shoppingDict;
  }

  onAdd(title, price) {
    this.cartDict = this.cartService.onAdd(title, price);
  }

  onSub(title, price) {
    this.cartDict = this.cartService.onSub(title, price);
  }
}
