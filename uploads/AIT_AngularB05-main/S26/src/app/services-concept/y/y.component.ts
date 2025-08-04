import { Component,inject } from '@angular/core';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-y',
  standalone: true,
  imports: [],
  templateUrl: './y.component.html',
  styleUrl: './y.component.css',
  providers:[TechService]
})
export class YComponent {

 techService = inject(TechService)
 
getBackendTech(){
  this.techService.techData = ["java","js","python","c#","php"]
}
}
