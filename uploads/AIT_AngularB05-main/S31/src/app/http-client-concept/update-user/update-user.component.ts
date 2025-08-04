import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
username:string =""
city:string=""
gender:string=""
email:string=""
usersservice = inject(UsersService)
callUpdateUser(){
  this.usersservice.showNewUser = true
}
}
