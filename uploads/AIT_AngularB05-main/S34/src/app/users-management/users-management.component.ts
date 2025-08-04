import { Component,inject } from '@angular/core';
import { CreateUserComponent } from '../http-client-concept/create-user/create-user.component';
import { UserDetailsComponent } from '../http-client-concept/user-details/user-details.component';
import { UpdateUserComponent } from '../http-client-concept/update-user/update-user.component';
import { UsersService } from '../http-client-concept/users.service';
@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent

  ],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.css'
})
export class UsersManagementComponent {
usersservice = inject(UsersService)
}
