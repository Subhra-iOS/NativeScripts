import { Component, OnInit } from '@angular/core';
import { LoginService } from '../app-service/login.service';
import { EventData } from '@nativescript/core/data/observable';
//import { Button } from '@nativescript/core/ui';
import { LoginModel } from '../app-interface/loginModel';
//import { Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  public loginModel: LoginModel
  constructor(private loginService: LoginService,
            private route: RouterExtensions) {
    this.loginModel = { email: "", password: "", token: ""}

  }

  ngOnInit() {

  }

  onClickLogin(args: EventData){
    //let button = args.object as Button
    //console.log(button)
    console.log(this.loginModel)
    this.loginService.setLoginModel(this.loginModel.email, this.loginModel.password)
    this.loginModel = this.loginService.getLoginModel()
    this.route.navigate(["dashboard", this.loginModel.token], {
        state: {
            user_email: this.loginModel.email,
            user_token: this.loginModel.token,
            user_firstName: "Subhra",
            user_lastName: "Roy"
        }
    })
  }

}
