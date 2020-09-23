import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route: Route[] = [
  {path: '', component: ShoppingCartComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ],

  declarations: [ShoppingCartComponent],
})
export class ShoppingCartModule { }
