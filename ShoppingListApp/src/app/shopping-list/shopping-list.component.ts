import { Component, OnInit } from '@angular/core';
import { Item } from './shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Item[] = [
    new Item('Apple', 10),
    new Item('Mango', 20),

  ]
  constructor() { }

  ngOnInit() {
  }
  onAddedItem(itemDetail: Item) {
    this.items.push(itemDetail);

  }

}
