import { Component,inject } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

    username:string;
    email:string;
    city:string;
    gender:string;

    constructor(){
      this.username = ""
      this.email = ""
      this.city = ""
      this.gender = ""
    }

    usersservice=  inject(UsersService)
    callCreateUser(){
      const data = {name:this.username,email:this.email,city:this.city,gender:this.gender}
    this.usersservice.createUser(data);
    this.username=""
    this.email = ""
    this.gender=""
    this.city=""

    }
}
