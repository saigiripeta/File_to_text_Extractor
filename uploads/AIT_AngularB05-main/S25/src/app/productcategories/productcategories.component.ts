import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productcategories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productcategories.component.html',
  styleUrl: './productcategories.component.css'
})
export class ProductcategoriesComponent {
category:string="all"
}
