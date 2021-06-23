
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
  enc : any  = '';

  


  constructor() {  
    var hash = CryptoJS.MD5("Message");
    console.warn(typeof hash);

    var hash = CryptoJS.SHA256("Message"); alert(typeof hash); // object alert(hash); 
    
  }  
   
}