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
  serverCreated = false;
  servers = [];
  serverDeleted = false;

  constructor() {
    setTimeout(() => {
      this.AllowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreated = true
    this.ServerCreatedStatus = 'Server Created Successfully! ';
    this.serverName = ''

  }
  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value

  }
  onResetServer() {
    this.serverName = ''
  }

  deleteServers() {
    this.serverDeleted = true;
    this.servers = [];
  }

  // delete() {
  //   this.servers.splice()
  // }




}
