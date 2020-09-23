import { ShoppingcartService } from './../shoppingcart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  checkoutObj;
  checkoutListKeys;
  checkoutList;
  totalMoney = 0;
  totalItems = 0;
  constructor(public cartService: ShoppingcartService, private router: Router) { }

  ngOnInit () {

    // build an arry for object(that is cartService.shoppingDict)
    if (this.cartService.shoppingDict) {
      this.checkoutObj = this.cartService.shoppingDict;
    } else {
      this.cartService.shoppingDict = JSON.parse(localStorage.getItem('productObject'));
      this.checkoutObj = this.cartService.shoppingDict;
    }


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




  isAdd(productName) {
    // console.log(productName);
    // console.log(this.cartService.shoppingDict[productName]['nums']);
    if (this.cartService.shoppingDict[productName]['nums'] < 99) {
      this.cartService.shoppingDict[productName]['nums'] += 1;
    }
    this.checkTotalMoneyTotleItems ();

  }


  isSub(productName) {
    // console.log(productName);
    // console.log(this.cartService.shoppingDict[productName]['nums']);
    if (this.cartService.shoppingDict[productName]['nums'] > 1) {
      this.cartService.shoppingDict[productName]['nums'] -= 1;
    }
    this.checkTotalMoneyTotleItems ();
  }


  checkTotalMoneyTotleItems () {
    this.totalItems = 0;
    this.totalMoney = 0;
    for (let index = 0; index < this.checkoutList.length; index++) {
      this.totalMoney += this.checkoutList[index]['price'] * this.checkoutList[index]['nums'];
      this.totalItems += this.checkoutList[index]['nums'];
    }
  }


  clearCart() {
    for (let index = 0; index < this.checkoutList.length; index++){
      this.checkoutList[index]['nums'] = 0; // 先歸零所有商品數量後，再全部Clear 確保Stroe頁面的數量有被 reset to 0
    }
    this.cartService.shoppingDict = []; // 清空Service內的物件
    this.checkoutList = [];
    this.totalMoney = 0;
    this.totalItems = 0;
  }


  itemDelete(c, i, checkoutListKeys, checkoutList) { // 給 list 然刪除 index
    // 先歸零 cartService.shoppingDict 的數量 (Store 頁面的數量是根據cartService 會被改為 0)
    this.cartService.shoppingDict[checkoutListKeys[i]]['nums'] = 0;
    delete this.cartService.shoppingDict[this.checkoutListKeys[i]];
    this.checkTotalMoneyTotleItems ();
    this.ngOnInit ();

  }


  onClick () {
    localStorage.setItem('productObject', JSON.stringify(this.cartService.shoppingDict));
    this.router.navigate(['/my/orders']);
  }


}





