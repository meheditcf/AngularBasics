import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-false',
  templateUrl: './false.component.html',
  styleUrls: ['./false.component.css']
})
export class FalseComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
