import { Component,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AComponent } from './relationship/a/a.component';
import { NavComponent } from './nav/nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import { MydirectivesComponent } from './mydirectives/mydirectives.component';
import { ForCComponent } from './for-c/for-c.component';
import { ProductsComponent } from './products/products.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
import { XComponent } from './services-concept/x/x.component';
import { YComponent } from './services-concept/y/y.component';
import { UserComponent } from './services-concept/user/user.component';
import { UserdetailsComponent } from './services-concept/userdetails/userdetails.component';
import { ObservableConceptComponent } from './observable-concept/observable-concept.component';
import { CreateUserComponent } from './http-client-concept/create-user/create-user.component';
import { UpdateUserComponent } from './http-client-concept/update-user/update-user.component';
import { UserDetailsComponent } from './http-client-concept/user-details/user-details.component';
import { UsersService } from './http-client-concept/users.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateUserComponent,UpdateUserComponent,UserDetailsComponent,ObservableConceptComponent,UserComponent,UserdetailsComponent,XComponent,YComponent,AComponent,AttributeDirComponent,ProductsComponent,ForCComponent,MydirectivesComponent,FormsModule,RouterOutlet,BannerComponent, HeaderComponent,CategoriesComponent, FooterComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  textData:string="Hello"
title=""
  constructor(public usersservice:UsersService){
    
  }
  update(){
    this.textData = "Welcome to Angular Data Binding"
   
  }

  
  

}
