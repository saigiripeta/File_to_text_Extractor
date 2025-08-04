import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from './nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { BannerComponent } from './banner/banner.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BannerComponent, HeaderComponent,CategoriesComponent, FooterComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username:string = "Kabir S"

  text=""
}
