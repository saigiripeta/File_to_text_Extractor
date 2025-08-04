import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CategoriesComponent } from '../categories/categories.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent,CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
