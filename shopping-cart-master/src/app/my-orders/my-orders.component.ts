import { ShoppingcartService } from './../shoppingcart.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  checkoutObj;
  checkoutListKeys;
  checkoutList;
  totalItems = 0;
  totalMoney = 0;
  constructor(public cartService: ShoppingcartService) { }



  ngOnInit() {
        // build an arry for object(that is cartService.shoppingDict)
        // this.checkoutObj = this.cartService.shoppingDict;
        this.cartService.shoppingDict = JSON.parse(localStorage.getItem('productObject'));
        this.checkoutObj = this.cartService.shoppingDict;
        console.log(this.cartService.shoppingDict);
        // Step 1. Get all the object keys.
        this.checkoutListKeys = Object.keys(this.checkoutObj);
        // Step 2. Create an empty array.
        this.checkoutList = [];
        // Step 3. Iterate throw all keys.
        for (let index = 0; index < this.checkoutListKeys.length; index++) {
          this.checkoutList.push(this.checkoutObj[this.checkoutListKeys[index]]);
        this.checkTotalMoneyTotleItems ();
  }
}



  checkTotalMoneyTotleItems () {
    this.totalItems = 0;
    this.totalMoney = 0;
    for (let index = 0; index < this.checkoutList.length; index++) {
      this.totalMoney += this.checkoutList[index]['price'] * this.checkoutList[index]['nums'];
      this.totalItems += this.checkoutList[index]['nums'];
    }

  }


  OK() {
    console.log(this.checkoutList);
    console.log(this.cartService.shoppingDict);
  }
}


