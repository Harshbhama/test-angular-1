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

    constructor(){
        this.serverstatus = Math.random() > 0.5 ? 'Online' : 'Offline'
    }

    getservertestthis()
    {
        return this.servertest;
    }
    getColor()
    {
        if(this.serverstatus == 'Online')
        {
            return 'green'
        }
        else
        {
            return 'red'
        }
    }
    
}