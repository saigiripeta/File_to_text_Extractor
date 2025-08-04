import { Component,Input,EventEmitter,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-b',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
//Property to hold input data
  childData:string=""

//create event and decorate with @Output()
@Output() myEvent =  new EventEmitter()
  
  getChildData(){
    //fire the custom event i.e. myEvent
    this.myEvent.emit(this.childData)
  }
}
