import { Injectable } from '@angular/core';
import { LoginModel } from '../app-interface/loginModel';

@Injectable({
    providedIn: 'root'
  })

export class LoginService {
    private login: LoginModel
    constructor() {
        this.login = { email: "", password: "", token: ""}
     }

    setLoginModel(_email: string, _password: string){
        this.login.email = _email
        this.login.password = _password
        this.login.token = "abcd123fbrebfkjerbfkbrkewkrebfkrf"
    }

    getLoginModel() : LoginModel{
        return this.login
    }

    resetToken(){
        this.login.token = " "
    }
}
