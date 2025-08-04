
import { inject } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
 import { Router } from "@angular/router";
export function authenticateRoute(){
  const auth = inject(AuthenticationService)
  const router = inject(Router)
    if(auth.isUserLoggedIn){
        return true
    }else{
       router.navigate(["/"])
        return false
    }
 }