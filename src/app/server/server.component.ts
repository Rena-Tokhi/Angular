import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
  <app-servers></app-servers>
  <p> do not use this way (inline template )if you have more then 3 lines of code </p>
  `,
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
