import { Component,inject, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

usersservice=inject(UsersService)

callGetUsersData(){
  this.usersservice.getUsersData()
}

ngOnInit(): void {
  this.callGetUsersData()
}

}
