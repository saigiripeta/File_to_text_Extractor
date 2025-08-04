import { Component } from '@angular/core';
import { Observable,of,from,map,filter,Subject } from 'rxjs';

@Component({
  selector: 'app-observable-concept',
  standalone: true,
  imports: [],
  templateUrl: './observable-concept.component.html',
  styleUrl: './observable-concept.component.css'
})
export class ObservableConceptComponent {
    
  //  data:any = []
    info:any 
    anotherInfo:number = 0

    data:any;
    anotherData:any;

     subjectObservable = new Subject()

       myobs = new Observable((observe)=>{
             observe.next(Math.random())
       })
  
  //  myObservable = from([10,20,30,40,50])

//    newObservable = this.myObservable.pipe(map((value)=>{
   
//   return  value*100 //{1000,2000,3000,4000,5000}
//  }))

      // filteredObservable = this.myObservable.pipe(filter((value)=>{
      //   return value >= 30 //{30,40,50}
      // }))

      //  filteredObservable = this.myObservable.pipe(filter((value)=>{
      //   return value >= 30 //{30,40,50}
      // }),map((filteredValue)=>{
      //  return filteredValue * 2 //{60,80,100}
      // }))

      //  filteredObservable = this.myObservable.pipe(map((filteredValue)=>{
      //  return filteredValue * 2 //{20,40,60,80,100}
      // }),filter((value)=>{
      //   return value <= 30 //{20}
      // }))
   

   getData(){

      

    this.subjectObservable.subscribe({
      next:(value)=>{
     this.info = value
      },
      error:(error)=>{
  alert("Something went Wrong")
  console.log(error)
      }
    })

    this.subjectObservable.subscribe({
      next:(value:any)=>{
     this.anotherInfo = value
      },
      error:(error)=>{
  alert("Something went Wrong")
  console.log(error)
      }
    })

    this.subjectObservable.next(Math.random())

  //   this.subjectObservable.next("raj")

  //   this.subjectObservable.subscribe({
  //     next:(value)=>{
  // this.data.push(value)
  //     },
  //     error:(error)=>{
  // alert("Something went Wrong")
  // console.log(error)
  //     }
  //   })

    
  this.myobs.subscribe({
    next:(value)=>{
      this.data = value
    }
  })

    this.myobs.subscribe({
      next:(value)=>{
        this.anotherData = value
      }
    })
 

    // this.newObservable.subscribe({
    //      next:(value:any)=>{
    //       this.data.push(value)
    //      }
    // })

    //  this.filteredObservable.subscribe({
    //      next:(value:any)=>{
    //       this.data.push(value)
    //      }
    // })
   }


}
