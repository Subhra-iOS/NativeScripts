import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../app-service/login.service';
import { Location } from '@angular/common';
import { RouterExtensions } from '@nativescript/angular';
import { Folder, knownFolders, path } from '@nativescript/core/file-system';
import { fromFile, ImageSource } from '@nativescript/core/image-source';


@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userEmail: String
  public firstName: String
  public lastName: String
 // public imageFromLocalFile: ImageSource

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
    //this.onLoadLocalImage()
  }

//   private onLoad(){
//     this.activeRouter.params.subscribe((params) => {
//       let _token = params["token"] as string
//       console.log(_token)
//     })

//   }

//   private onLoadLocalImage(){
//     const folder: Folder = <Folder> knownFolders.currentApp();
//     const folderPath: string = path.join(folder.path, "resource/dashboardbanner-iPhone.png");
//     this.imageFromLocalFile = <ImageSource> fromFile(folderPath);
//   }

  goBack(){
    this.logService.resetToken()
    this.location.back()
  }

  openSettings(){

  }

}
