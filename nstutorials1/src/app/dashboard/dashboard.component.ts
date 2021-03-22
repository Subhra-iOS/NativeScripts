import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../app-service/login.service';
import { Location } from '@angular/common';
import { RouterExtensions } from '@nativescript/angular';
import {Color, Label, Page, TextField } from '@nativescript/core';
import { EventData } from '@nativescript/core/data/observable';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { AnimationCurve } from '@nativescript/core/ui/enums';




@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userEmail: String
  public firstName: String
  public lastName: String
  private stackView:StackLayout

  constructor(private activeRouter: RouterExtensions,
              private location: Location,
              private logService: LoginService,
              private page: Page) {


    let state = this.activeRouter.router.getCurrentNavigation().extras.state
   //console.log(state["user_email"])
    //console.log(state["user_token"])
    this.userEmail = state["user_email"]
    this.firstName = state["user_firstName"]
    this.lastName = state["user_lastName"]

  }

  ngOnInit() {
    this.onLoad()
  }

  private onLoad(){
    // this.activeRouter.params.subscribe((params) => {
    //   let _token = params["token"] as string
    //   console.log(_token)
    // })
    this.page.actionBarHidden = false
    this.stackView = <StackLayout>this.page.getViewById("stackView")
  }

  goBack(){
    this.logService.resetToken()
    this.location.back()
  }

  openSettings(){

  }

  didTextChange(args: EventData){
    let textField = args.object as TextField
    console.log("Text Has been changed to: ",textField.text)
  }

  onClickRunAnimation(){
    console.log("Trigger animation")
    let view = <Label>this.stackView.getViewById("lblAnimate")

    view.animate({
        duration: 3000,
        rotate: 360,
        curve: AnimationCurve.easeInOut
    }).then(()=> {
        view.rotate = 0
    })
  }

}
