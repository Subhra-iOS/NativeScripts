import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../app-service/login.service';
import { Location } from '@angular/common';
import { RouterExtensions } from '@nativescript/angular';


@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userEmail: String
  public firstName: String
  public lastName: String

  constructor(private activeRouter: RouterExtensions,
              private location: Location,
              private logService: LoginService) {

    let state = this.activeRouter.router.getCurrentNavigation().extras.state
   //console.log(state["user_email"])
    //console.log(state["user_token"])
    this.userEmail = state["user_email"]
    this.firstName = state["user_firstName"]
    this.lastName = state["user_lastName"]

  }

  ngOnInit() {
    //this.onLoad()
  }

//   private onLoad(){
//     this.activeRouter.params.subscribe((params) => {
//       let _token = params["token"] as string
//       console.log(_token)
//     })

//   }

  goBack(){
    this.logService.resetToken()
    this.location.back()
  }

  openSettings(){

  }

}
