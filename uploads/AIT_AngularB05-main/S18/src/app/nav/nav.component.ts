import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
