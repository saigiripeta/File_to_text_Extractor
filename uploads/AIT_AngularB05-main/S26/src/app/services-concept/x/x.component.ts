import { Component,inject } from '@angular/core';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-x',
  standalone: true,
  imports: [],
  templateUrl: './x.component.html',
  styleUrl: './x.component.css',
  providers:[TechService]
})
export class XComponent {


  techService=inject(TechService)
  

   getBackendTech(){
  this.techService.techData = ["java","js","python","c#","php"]
}
}
