import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username:string=""
  usersservice= inject(UsersService)

  addUser(){
this.usersservice.users.push(this.username)
this.username =""
  }
}
