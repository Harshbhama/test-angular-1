import {Component} from '@angular/core';

@Component({

   // selector: '.app-server'
    selector: 'app-server',
    templateUrl: './server.component.html'

})
export class ServerComponent{

    serverid = 10
    serverstatus = 'offline'
    servertest = 'testmethod'

    getservertestthis()
    {
        return this.servertest;
    }
    
}