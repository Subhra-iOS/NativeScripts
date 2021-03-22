import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor(){
        console.log("App initiate")
        console.dir({
            type: "Apple",
            color: "Red"
        })
    }
 }
