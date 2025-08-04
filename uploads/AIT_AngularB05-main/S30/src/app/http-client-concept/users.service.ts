import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersData:any = []

 httpclient =inject(HttpClient)

  getUsersData(){
    //add logic to send get request
    this.httpclient.get("http://localhost:3000/users").subscribe({
      next:(data)=>{
        this.usersData = data
        console.log(this.usersData)
      },
      error:(error)=>{
        alert("Faield to fetch user data")
        console.log(error)
      }
    })
  }
}
