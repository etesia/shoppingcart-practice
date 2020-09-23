import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { state } from '@angular/core/src/animation/dsl';



@Injectable()
export class AuthGuardService implements CanActivate {
  hasUser;

  constructor(private AuthService: AuthService, private router: Router) {
    this.hasUser = this.AuthService.user;
   }

  canActivate (route, state: RouterStateSnapshot) {
    if (this.AuthService.user || this.AuthService.Accuser) {
      console.log('user already login!');
      return true;
    } else {
      console.log('user is not login yet!');
      // 如果用戶未登入，就給一個queryParam，用以紀錄當前url
      this.router.navigate(['/login'], {queryParams: { theReturnUrl: state.url }});
      return false;
    }

  }
}
