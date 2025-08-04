import { Component,inject,ContentChild, ElementRef } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @ContentChild('heading') h1Ref:ElementRef
  auth = inject(AuthenticationService)
  router = inject(Router)
  logoutUser() {
    this.auth.logout()
    this.router.navigate(["/"])
  }

  changeTitle(){
    this.h1Ref.nativeElement.innerText = "Title Changed"
  }
}
