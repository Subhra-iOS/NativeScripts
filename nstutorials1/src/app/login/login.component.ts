import { Component, OnInit } from '@angular/core';
import { LoginService } from '../app-service/login.service';
import { EventData } from '@nativescript/core/data/observable';
//import { Button } from '@nativescript/core/ui';
import { LoginModel } from '../app-interface/loginModel';
import { Router } from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public loginModel: LoginModel
  
  constructor(private loginService: LoginService, private route: Router) {
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
    this.route.navigate(["dashboard", this.loginModel.token])

  }

}
