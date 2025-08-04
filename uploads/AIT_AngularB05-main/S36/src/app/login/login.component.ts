import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  
  selector: 'app-login',
  imports:[CommonModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
auth =  inject(AuthenticationService)
router = inject(Router)

  onSubmit(): void {
    this.auth.login()
    this.router.navigate(["/home"])
     
    }
}
