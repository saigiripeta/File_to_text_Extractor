import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

  @Input() parentData:string = "No Data From Parent"
}
