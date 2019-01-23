import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  newserver = false
  constructor() {

      setTimeout(() => {
        this.newserver=true
        
      }, 2000);

   }

  ngOnInit() {
  }

}
