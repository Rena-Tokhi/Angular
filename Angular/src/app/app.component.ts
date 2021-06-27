
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular';
  name = "Tokhi";
  enc: any = '';
  server: any [] = [];
  constructor() {

    var hash = CryptoJS.MD5("Message");
    console.warn(typeof hash);
    var hash = CryptoJS.SHA256("Message");// object alert(hash); 

  }
  onAddServer() {
    this.server.push('Another Server')
  }
  onRemovServer(id :number) {
  const position = id + 1;
  this.server.splice(position ,1 )
  }

}