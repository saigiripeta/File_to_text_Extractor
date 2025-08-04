import { Component,inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
username:string =""
city:string=""
gender:string=""
email:string=""

usersservice = inject(UsersService)
callUpdateUser(){
  this.usersservice.showNewUser = true
  this.usersservice.updateUserData({name:this.username,gender:this.gender,email:this.email,city:this.city})
}

ngOnInit(): void {
   this.username = this.usersservice.updateUser.name
   this.city = this.usersservice.updateUser.city
   this.email = this.usersservice.updateUser.email
   this.gender = this.usersservice.updateUser.gender
}
}
