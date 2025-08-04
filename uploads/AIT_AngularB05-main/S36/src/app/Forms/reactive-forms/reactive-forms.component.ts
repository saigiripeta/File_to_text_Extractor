import { Component } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

    myReactiveform  = new FormGroup({
         username:new FormControl("",Validators.required),
         email:new FormControl("",[Validators.email,Validators.required]),
         password:new FormControl(null,[Validators.minLength(7),Validators.required]),
         skills:new FormArray([new FormControl(),new FormControl(),])
        })

    getUserData(){
       if(this.myReactiveform.valid){
       }else{
// alert("Add Proper Data")
       }
    }


    getControls(){
      return this.myReactiveform.get("skills") as FormArray
    }

    addControl(){
      (this.myReactiveform.get("skills") as FormArray).push(new FormControl())
    }

    removeControl(index:number){
 (this.myReactiveform.get("skills") as FormArray).removeAt(index)
    }

    setValues(){
      this.myReactiveform.setValue({
        email:"sagar@gmail.com",
        username:"sagar",
        password:"123",
        skills:["html"]
      })
    }

    patchValues(){
      this.myReactiveform.patchValue({
        email:"kabir@gmail.com"
      })
    }

    resetForm(){
      this.myReactiveform.reset()
    }

    validatePassword(){
      return this.myReactiveform.get("password").touched&&this.myReactiveform.get("password").errors?.["minlength"]
    }
}
