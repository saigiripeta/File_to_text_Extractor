import { Component } from '@angular/core';

@Component({
  selector: 'app-mydirectives',
  standalone: true,
  imports: [],
  templateUrl: './mydirectives.component.html',
  styleUrl: './mydirectives.component.css'
})
export class MydirectivesComponent {
 
    isAdmin : boolean  = false;
    experience:number | string = 11

    changeRole(value:boolean){
this.isAdmin = value
    }

    findDesignation(event:any){
      console.log(typeof event.target.value)
     this.experience = event.target.value
    }
}
