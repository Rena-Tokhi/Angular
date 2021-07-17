import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
     h2{
       color:dodgerblue;
     }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
