import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
createUser(formRef:NgForm){
  console.log(formRef)
  // console.log(formRef.value.email)
  //  console.log(formRef.value.password)
  
}
resetForm(myForm:NgForm){
  myForm.reset({
    email:"",
    password:""
  })
}

patch(myForm:NgForm){

 myForm.setValue({
  email:"hi@gmail.com",
  password:"1234"
 })
}
}
