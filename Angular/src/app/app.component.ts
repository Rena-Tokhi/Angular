
import { Component } from '@angular/core';  
import * as CryptoJS from 'crypto-js';  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  

  //  title = 'Angular';
  name = "Tokhi"

  title = 'EncryptionDecryptionSample';  

  plainText:any;  
  encryptText: any;  
  encPassword: any;  
  decPassword:any;  
  conversionEncryptOutput: any;  
  conversionDecryptOutput:any;  

  constructor() {  
  }  
  //method is used to encrypt and decrypt the text  
  convertText(conversion:string) {  
      if (conversion=="encrypt") {  
        this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();  
      }  
      else {  
        this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.encryptText.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  

    }  
  }  
}