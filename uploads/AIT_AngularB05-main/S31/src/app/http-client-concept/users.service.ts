import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersData:any = []
  showNewUser:boolean = true;

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

  createUser(user:any){
    this.httpclient.post("http://localhost:3000/users",user).subscribe({
      next:(res)=>{
        this.getUsersData()
        
      },
      error:(error)=>{
        console.log(error)
        alert("Failed to Create User")
      }
    })
  }

  removeUser(id:string){
    this.httpclient.delete(`http://localhost:3000/users/${id}`).subscribe({
      next:(res)=>{
        alert("User Removed")
        //Add the logic to remove data of user from usersData Array
        console.log(res)
      },
      error:(error)=>{
        alert("Failed to Remove User")
        console.log(error)
      }
    })
  }
}
