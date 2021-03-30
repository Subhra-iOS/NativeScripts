import { Router } from '@angular/router';
import { UserService } from './../../shared/user/user.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User } from './../../shared/user/user';
import { Page } from '@nativescript/core/ui/page';
import { Color } from '@nativescript/core/color';
import { View } from '@nativescript/core/ui/core/view';
import { setHintColor } from '../../shared/utils/utils';
import { TextField } from '@nativescript/core';


@Component({
  selector: 'ns-login',
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login-common.css']
})
export class LoginComponent implements OnInit {

   public user: User
   public isLoggedIn = true
   @ViewChild('stackContainer') stackContainer: ElementRef
   @ViewChild('email') emailTextField: ElementRef
   @ViewChild('password') passwordTextField: ElementRef

  constructor(private router: Router,
              private userService: UserService,
              private page: Page) {
        this.user = new User()
        this.user.email = "subhra@yopmail.com"
        this.user.password = "123456"
        // this.user.email = "alex@nuviuos.com"
        // this.user.password = "password"
   }

  ngOnInit() {
    this.page.actionBarHidden = true
    this.page.backgroundImage = "res://bg_login"
  }

  onClickSubmit(){
      console.log("Tap on sign in button")
      if(!this.user.isValidate()){
          alert('Please enter a valid email address')
          return
      }
      if(this.isLoggedIn){
        this.signin()
      }else{
        this.signup()
      }
  }

  onClickToggle(){
      this.isLoggedIn = !this.isLoggedIn
      this.setTextFieldColors()
      const container = <View>this.stackContainer.nativeElement
      container.animate({
          backgroundColor : this.isLoggedIn ? new Color('white') : new Color('#9fcb00cd'),
          duration: 300
      })
  }

  private signin(){
    //TODO task
    this.userService.login(this.user).subscribe(
        (result) => {
            console.log("Login success:" + result._kmd.authtoken)
            this.router.navigate(["list"])
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

  private setTextFieldColors() {
        const emailTextField = <TextField>this.emailTextField.nativeElement
        const passwordTextField = <TextField>this.passwordTextField.nativeElement

        const mainTextColor = new Color(this.isLoggedIn ? 'black' : '#C4AFB4')
        emailTextField.color = mainTextColor
        passwordTextField.color = mainTextColor

        const hintColor = new Color(this.isLoggedIn ? '#ACA6A7' : '#C4AFB4')
        setHintColor({ view: emailTextField, color: hintColor })
        setHintColor({ view: passwordTextField, color: hintColor })
  }

}
