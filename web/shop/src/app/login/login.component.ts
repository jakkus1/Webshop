import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/service/auth.service";
import {Location} from "@angular/common";
import {LoginUserModel} from "../shared/model/login-user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: LoginUserModel = new LoginUserModel();

  constructor(private authService: AuthService,
              private location: Location) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userData).subscribe((data) => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
