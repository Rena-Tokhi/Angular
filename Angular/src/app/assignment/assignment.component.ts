import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
 showP1 = false;
 showP = false;
   log : number[] = [];
 
  constructor() { }

  ngOnInit(): void {
  }
    onToggle1(){
    this.showP1 = !this.showP1;
  }
  onToggle(){
    this.showP = !this.showP;
    this.log.push(this.log.length + 1);

  }

}
