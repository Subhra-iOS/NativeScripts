import { Grocery } from './../../shared/grocery/grocery';
import { Component, OnInit } from '@angular/core';
import { GroceryListService } from '~/app/shared/grocery/grocery-list.service';

@Component({
  selector: 'ns-list',
  providers: [GroceryListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css', './list-common.css']
})
export class ListComponent implements OnInit {

  public groceryList: Grocery[] = []

  constructor(private groceryService: GroceryListService) {

  }

  public ngOnInit() {
    this.groceryService.loadData().subscribe(
         result => {
            console.log(result)
            result.forEach( grocery => {
              this.groceryList.unshift(grocery)
            })
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

}
