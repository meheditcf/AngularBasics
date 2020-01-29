import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() count: number;
  @Output() countChange = new EventEmitter();

  updateCount() {
    this.count = this.count + 1;
    this.countChange.emit(this.count)
  }

  constructor() { }

  ngOnInit() {
  }

}
