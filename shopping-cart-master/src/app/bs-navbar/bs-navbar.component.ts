import { AuthService } from './../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user(): string {
    if (this.AuthService.user) {
      return this.AuthService.user.displayName;
    } else if (this.AuthService.Accuser) {
      return this.AuthService.accusername;
    }
    return undefined;
  }

  constructor(public AuthService: AuthService) {
  }

  logOut() {
    this.AuthService.logOut();
    console.log("User is logout", this.AuthService.user);
  }
}
