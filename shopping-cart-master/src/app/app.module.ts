import { PasswordComponent } from './password/password.component';
import { AuthService } from './auth.service';
import { ShoppingcartService } from './shoppingcart.service';
import { CategoryService } from './category.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductsService } from './products.service';
import { AuthGuardService } from './auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    MyOrdersComponent,
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule' },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [ProductsService, CategoryService, ShoppingcartService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

