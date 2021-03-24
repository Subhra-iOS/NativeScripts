import { Router } from '@angular/router';
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

  constructor(private router: Router, private userService: UserService) {
        this.user = new User()
        this.user.email = "subhra@yopmail.com"
        this.user.password = "123456"
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
    this.userService.login(this.user).subscribe(
        (result) => {
            this.router.navigate(["/list"])
        },
        (error) => alert("We are not able to find any account")

    )
  }

  private signup(){
      this.userService.register(this.user).subscribe(
          (result)=>{
            console.log(result)
          },
          ()=>{
            alert("Your account has successfully created")
            this.onClickToggle()
          },
          ()=>{
            alert("We are unable to process your request")
          }
      )
  }

}
