import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from './nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import { MydirectivesComponent } from './mydirectives/mydirectives.component';
import { ForCComponent } from './for-c/for-c.component';
import { ProductsComponent } from './products/products.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AttributeDirComponent,ProductsComponent,ForCComponent,MydirectivesComponent,FormsModule,RouterOutlet,BannerComponent, HeaderComponent,CategoriesComponent, FooterComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  textData:string="Hello"

  update(){
    this.textData = "Welcome to Angular Data Binding"
  }

}
