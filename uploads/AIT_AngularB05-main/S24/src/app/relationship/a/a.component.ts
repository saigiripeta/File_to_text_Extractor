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

   data:string = "Hello I am From Parent"
   inputData:string=""
   
   getData(){
    this.data = this.inputData
   }
}
