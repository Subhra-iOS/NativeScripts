import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../app-service/login.service';
import { Location } from '@angular/common';


@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, 
              private location: Location, 
              private logService: LoginService) { }

  ngOnInit() {
    this.onLoad()
  }

  private onLoad(){
    this.activeRouter.params.subscribe((params) => {
      let _token = params["token"] as string
      console.log(_token)
    })
    
  }

  goBack(){
    this.logService.resetToken()
    this.location.back()
  }

  openSettings(){
    
  }

}
