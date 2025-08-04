import { Component,inject } from '@angular/core';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-x',
  standalone: true,
  imports: [],
  templateUrl: './x.component.html',
  styleUrl: './x.component.css',
  
})
export class XComponent {


  techService=inject(TechService)
  

   getBackendTech(){
    
  this.techService.techData = ["mongodb","oracle","sqlserver","mysql"]
}
}
