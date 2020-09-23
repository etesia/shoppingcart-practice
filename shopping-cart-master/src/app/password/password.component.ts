import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  constructor(private authService: AuthService) { }
  username;
  ngOnInit(): void {
  }

  PasswordLogin () {
    console.log("Acc user name:", this.username);
    this.authService.loginByAcc(this.username);
  }
}
