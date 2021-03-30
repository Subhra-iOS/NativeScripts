import { Grocery } from './../../shared/grocery/grocery';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GroceryListService } from '~/app/shared/grocery/grocery-list.service';
import { TextField } from '@nativescript/core/ui/text-field';
import * as SocialShare from '@nativescript/social-share';

@Component({
  selector: 'ns-list',
  providers: [GroceryListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css', './list-common.css']
})
export class ListComponent implements OnInit {

  public groceryList: Grocery[] = []
  public grocery = ''
  public isLoading = false
  public isListLoaded = false
  @ViewChild('groceryTextField') groceryTxtField: ElementRef

  constructor(private groceryService: GroceryListService) {

  }

  public ngOnInit() {
    this.isLoading = true
    this.groceryService.loadData().subscribe(
         (result: Grocery[]) => {
            console.log(result)
            result.forEach( grocery => {
              console.log("Each item:" + grocery.name)
              this.groceryList.unshift(grocery)
            })
            this.isLoading = false
            this.isListLoaded = true
         },
         error => alert("Error in service")
    )
    // this.groceryService.loadList()
    //     .subscribe(
    //         result => {
    //         console.log(result)
    //         result.forEach( grocery => {
    //             this.groceryList.unshift(grocery)
    //         })
    //         },
    //         error => alert("Error in service")
    //     )

  }

  public addItem(){
        if (this.grocery.trim() === ''){
            alert('Please enter a grocery item')
            return
        }

        let txtField = <TextField>this.groceryTxtField.nativeElement
        txtField.dismissSoftInput()
        this.isLoading = true
        this.groceryService
            .add(this.grocery)
            .subscribe(
                (gorceryItem: Grocery) => {
                    this.groceryList.unshift(gorceryItem)
                    this.grocery = ''
                    this.isLoading = false
                 },
                 error => {
                     alert({
                         message: 'An error occur while adding an item to your list',
                         okButtonText: 'OK'
                     })
                     this.grocery = ''
                     this.isLoading = false
                 }
            )
  }

  public share(){
    let shareList = []
    this.groceryList.forEach( model => {
        shareList.push(model.name)
    })

    let shareTxt = shareList.join(",").trim()
    SocialShare.shareText(shareTxt, "My Groceries")

  }

}
