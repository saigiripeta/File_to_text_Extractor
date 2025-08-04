import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-mydialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './mydialog.component.html',
  styleUrl: './mydialog.component.css'
})
export class MydialogComponent {

}
