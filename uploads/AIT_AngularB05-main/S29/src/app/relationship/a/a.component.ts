import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-a',
  standalone: true,
  imports: [BComponent,FormsModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
dataFromChild:string=""
  
  getChildData(data:any){
   this.dataFromChild = data

  }
}
