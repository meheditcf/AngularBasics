import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Item } from '../shopping.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName', { static: false }) itemNameRef: ElementRef;
  @ViewChild('itemPrice', { static: false }) itemPriceRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Item>();


  constructor() { }

  ngOnInit() {
  }
  getData() {
    const iName = this.itemNameRef.nativeElement.value;
    const iPrice = this.itemPriceRef.nativeElement.value;

    const newItem = new Item(iName, iPrice);
    this.itemAdded.emit(newItem);

  }

}
