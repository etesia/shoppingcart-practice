import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';



@Injectable()
export class AuthService {
  user: firebase.User;
  Accuser;
  accusername;
  returnUrl;
  // fs = require('fs');
  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    afAuth.authState.subscribe(user => {
      console.log("User's login status: ", user);
      console.log("The current url is: ", localStorage.getItem('theReturnUrl'));
      this.user = user;
      let theReturnUrl = localStorage.getItem('theReturnUrl');
      router.navigate([theReturnUrl]);
      localStorage.setItem('theReturnUrl', '/')
    });

  }

  login() {
    // var a = 'Cat' || 'Dog';  will return 'Cat'
    this.returnUrl = this.route.snapshot.queryParamMap.get('theReturnUrl') || '/';
    localStorage.setItem('theReturnUrl', this.returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  loginByAcc(username: string) {
    this.accusername = username;
    this.Accuser = true;
    console.log(this.Accuser);
    this.returnUrl = this.route.snapshot.queryParamMap.get('theReturnUrl') || '/';
    localStorage.setItem('theReturnUrl', this.returnUrl);
    let theReturnUrl = localStorage.getItem('theReturnUrl');
    this.router.navigate([theReturnUrl]);
  }



  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
    this.Accuser = false;
    // console.log('returnUrl:', returnUrl);
    // console.log('snap:', this.route.snapshot);

  }


}
