import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) {
    // db.list('/products').subscribe(products => {
    //   this.products = products;
    //   // console.log("cons", this.products);
    // });
  }
  getAll() {
    return this.db.list('/categories');
  }
}
