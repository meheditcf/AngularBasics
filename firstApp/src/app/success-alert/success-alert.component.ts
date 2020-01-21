import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  AllowNewServer = false;
  ServerCreatedStatus = '';
  serverName = '';
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.AllowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true
    this.ServerCreatedStatus = 'Server Created Successfully! ' + 'Server Name:' + this.serverName;

  }
  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value

  }
  onResetServer() {
    this.serverName = ''
  }




}
