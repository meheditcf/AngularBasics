import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() count: number;
  @Output() countChange = new EventEmitter();
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter()
  color = "";
  updatedStockValue: number;

  updateCount() {
    this.count = this.count + 1;
    this.countChange.emit(this.count)
  }
  stockValueChanged() {
    this.stockValueChange.emit({ id: this.productId, updatedStockValue: this.updatedStockValue })
    this.updatedStockValue = null;


  }
  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green'
    }
    else {
      this.color = 'red'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
