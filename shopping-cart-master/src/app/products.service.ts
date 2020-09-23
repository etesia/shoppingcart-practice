import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class ProductsService {
  // products: any[];


  constructor(private db: AngularFireDatabase) {
    // db.list('/products').subscribe(products => {
    //   this.products = products;
    //   // console.log("cons", this.products);
    // });
  }
  getAll() {
    return this.db.list('/products');
  }

}
