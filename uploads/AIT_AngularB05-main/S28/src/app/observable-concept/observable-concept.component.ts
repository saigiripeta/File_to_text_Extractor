import { Component } from '@angular/core';
import { Observable,of,from } from 'rxjs';

@Component({
  selector: 'app-observable-concept',
  standalone: true,
  imports: [],
  templateUrl: './observable-concept.component.html',
  styleUrl: './observable-concept.component.css'
})
export class ObservableConceptComponent {
observable_data:any;

//     myobservable  = new Observable((observer)=>{//observer
//       //observer = {next:function(){},error:()=>{},complete:()=>{}}

//       observer.next(100)
//       observer.next(200)

//       observer.complete()
//       observer.error(100)
// })


  //   getData(){
  // this.myobservable.subscribe({
  //   next:function(value){
  //     console.log("next")
  //     console.log(value)
  //   },

  //   error:function(error){
  //      console.log("error")
  //     console.log(error)
  //   },

  //   complete:function(){
  //      console.log("complete")
     
  //   }
  // })
  //   }

//     myOfObservable = of(10,20,30,40,["a","b"],{name:"sagar"})
                      

//   getData(){
// this.myOfObservable.subscribe({
//   next:(value)=>{
//     console.log(value)
//     console.log("------------------")
//   },
//   error:()=>{
//     alert("error")
//   },
//   complete:()=>{
//     console.log("completed data storing")
//   }
// })
//     }


 myFromObservable = from([10,20,30,40])

  getData(){
this.myFromObservable.subscribe({
  next:(value)=>{
    console.log(value)
    console.log("------------------")
  },
  error:()=>{
    alert("error")
  },
  complete:()=>{
    console.log("completed data storing")
  }
})
    }
}
