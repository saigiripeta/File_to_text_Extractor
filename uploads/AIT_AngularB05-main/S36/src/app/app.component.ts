import { Component,ElementRef,inject,QueryList,ViewChild, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { TdfComponent } from './Forms/tdf/tdf.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    NavComponent,
    TdfComponent,
    ReactiveFormsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  // @ViewChild('title') ref1:ElementRef ;

  // @ViewChildren('title') ref:QueryList<ElementRef>



  //  @ViewChild('subtitle') ref2:ElementRef ;


//   changeTitle(divRef:any){

//     this.ref['_results'][1].nativeElement.style.color="red"

//     //logic to change content of h2
//     // h2Ref.innerText = "Changed the Content"
//     // h2Ref.style.color = "red"

// // this.ref1.nativeElement.style.color = "red"
// // this.ref2.nativeElement.style.color="green"

//     divRef.style.border="2px solid green"
//     divRef.style.padding = "20px"
//     divRef.style.width="300px"
//     divRef.style.margin = "100px"
//   }
  
  
}

  
  


