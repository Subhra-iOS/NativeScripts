import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css', './list-common.css']
})
export class ListComponent implements OnInit {

  public groceryList = []

  constructor() {

  }

  public ngOnInit() {
      this.groceryList.push({ name: 'Apple'})
      this.groceryList.push({ name: 'Banana'})
      this.groceryList.push({ name: 'Lemon'})
  }

}
