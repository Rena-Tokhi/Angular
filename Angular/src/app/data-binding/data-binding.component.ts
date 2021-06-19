import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
   
  serverId : number = 1;
  serverStatus :string = "offline";
  serverCreationStatus = "No server was created !"
  serverName='testName';
  allowNewServer  = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit(): void {
  }
onCreatServer(){
  this.serverCreationStatus = "server was Created "
}
onUpdateServerName(event :Event ){
this.serverName = (<HTMLInputElement>event.target).value;
} 
}
