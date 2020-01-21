import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    // selector: '.app-server' --- selector as class
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']


})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: String = 'Offline'
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
    }

    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red'
    }

}