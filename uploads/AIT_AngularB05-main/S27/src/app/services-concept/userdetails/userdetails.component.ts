import { Component } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {

  //  users:any
  constructor(public usersservice:UsersService){
  // this.users = usersservice
  }

  removeUser(index:number){
    this.usersservice.users.splice(index,1)
  }

}
