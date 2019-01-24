import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  newserver = false
  servercreate = 'Not any server created'
  constructor() {

      setTimeout(() => {
        this.newserver=true
        
      }, 2000);

   }

  ngOnInit() {
  }
  onCreateServer(){
    this.servercreate = 'New server created'
  }

}
