import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  constructor() {
    console.log("constructor called!")
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called!")
    console.log(changes)

  }

  ngOnInit() {
    console.log("ngOnInit called!")
  }

}
