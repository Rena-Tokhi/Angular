import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CommonModule } from "@angular/common";




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DataBindingComponent,
    NgStyleComponent,
    AssignmentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
