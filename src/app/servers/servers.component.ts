import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  newserver = false
  servercreate = 'Not any server created'
  servername = ''
  serverCreated = false
  constructor() {

      setTimeout(() => {
        this.newserver=true
        
      }, 2000);

   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true
    this.servercreate = 'New server created! Name is ' + this.servername
  }
  onUpdateServerName(event: any){

   // console.log(event);
    this.servername = (<HTMLInputElement>event.target).value;

  }

}
