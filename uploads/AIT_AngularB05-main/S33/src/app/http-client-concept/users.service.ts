import { Injectable,inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersData:any = []
 
  userIndex:number=0
  showNewUser:boolean = true;
  updateUser = {
    id:"",
    name:"",
    gender:"",
    email:"",
    city:""
  }

 httpclient =inject(HttpClient)
 headers =  new HttpHeaders({
    "Content-Type":"application/json",
    "Authorization":`Bearer ${localStorage.getItem("token")}`
    
   })

  getUsersData(){
  
    //add logic to send get request
    this.httpclient.get("http://localhost:3000/users",{headers:this.headers}).subscribe({
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
    this.httpclient.post("http://localhost:3000/users",user,{headers:this.headers}).subscribe({
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
    this.httpclient.delete(`http://localhost:3000/users/${id}`,{headers:this.headers}).subscribe({
      next:(res)=>{
     
        //Add the logic to remove data of user from usersData Array
        console.log(res)
     this.usersData = this.usersData.filter((user:any)=>user.id != id)
      },
      error:(error)=>{
        alert("Failed to Remove User")
        console.log(error)
      }
    })
  }

  updateUserData(data:any){
    this.httpclient.put(`http://localhost:3000/users/${this.updateUser.id}`,data,{headers:this.headers}).subscribe({
      next:(res)=>{
     
      
        //Update the Table
    
         this.usersData.splice(this.userIndex,1,res)
        

      },
      error:(error)=>{
        alert("Failed to uodate user")
        console.log(error)
      }
    })
  }
}
