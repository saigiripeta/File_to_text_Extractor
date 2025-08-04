import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {
   
  // divClass:string="green"
    textColor:string="red";
    bgcolor:string="black";
    padding:string = "20px"
  divClass:boolean=true

//   changeStyle(event:any){
// this.divClass = event.target.value
//   }

 changeStyle(event:any){
  if(event.target.value==="red"){
    this.textColor = "red";
    this.bgcolor = "black";
    this.padding = "20px"
  }else{
    this.textColor = "blue";
    this.bgcolor="yellow";
    this.padding = "50px"
  }

//    if(event.target.value==="green"){
//  this.divClass = true
//    }else{
//     this.divClass = false
//    }

  }
}
