import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login-common.css']
})
export class LoginComponent implements OnInit {

   public email = 'subhra.roy@e-arc.com'
  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(){
      console.log("Tap on sign in button")
      alert(`You're using: ${this.email}`)
  }

}
