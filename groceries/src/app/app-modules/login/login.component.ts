import { UserService } from './../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../shared/user/user';


@Component({
  selector: 'ns-login',
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login-common.css']
})
export class LoginComponent implements OnInit {

   public user: User
   public isLoggedIn = true

  constructor(private userService: UserService) {
        this.user = new User()
   }

  ngOnInit() {
  }

  onClickSubmit(){
      console.log("Tap on sign in button")
      if(this.isLoggedIn){
        this.signin()
      }else{
        this.signup()
      }
  }

  onClickToggle(){
      this.isLoggedIn = !this.isLoggedIn
  }

  private signin(){
    //TODO task
  }

  private signup(){
      this.userService.register(this.user)
  }

}
