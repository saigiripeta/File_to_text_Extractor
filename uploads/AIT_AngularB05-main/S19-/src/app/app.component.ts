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
 
  typeValue:string = "password"
  
  btnText:string ="Show Password"
  username:string="Aditya"
  city:string = "Pune"
  image:string = "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg"
  inputData :string = ""
  width:string="100"
  height:string= "100"

  getData(event:any){
this.inputData=event.target.value
  }

   changeUserData(){
    this.width = "300"
    this.height = "300"
    this.username = "Soniya Sharma";
    this.city = "Mumbai";
    this.image = "https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg"
   }

   showPassword(){
    if(this.typeValue==="password"){
this.typeValue = "text"
this.btnText = "Hide Password"
}
else{
  this.typeValue="password"
  this.btnText="Show Password"
}
   }

}
