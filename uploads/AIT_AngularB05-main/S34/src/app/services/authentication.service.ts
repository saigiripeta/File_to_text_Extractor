import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   isUserLoggedIn:boolean = false
 
   login(){
this.isUserLoggedIn = true
   }

   logout(){
this.isUserLoggedIn = false
   }




}
